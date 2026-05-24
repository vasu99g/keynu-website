/**
 * Synthesised tampura drone — the ambient sound of Indian classical music.
 *
 * A real tampura plays four strings tuned Pa-Sa-Sa-sa (5th, root, root,
 * octave-root). We approximate that texture with three sine oscillators per
 * note, gently detuned for chorus, run through a low-pass filter for warmth.
 * No external audio file required — the loop is infinite and seamless.
 *
 * The Web Audio context is created lazily on first `start()` to comply with
 * browser autoplay policies (which require a user gesture).
 */

interface TampuraConfig {
  /** Final mix volume, 0–1. Brand default 0.18 = present but unobtrusive. */
  volume: number;
  /** Fade-in/out duration in seconds for a soft begin/end. */
  fadeSeconds: number;
}

const DEFAULT_CONFIG: TampuraConfig = {
  volume: 0.18,
  fadeSeconds: 2.5,
};

/** Tampura notes in A — Pa (E3), Sa (A3), sa (A4). */
const NOTES = [164.81, 220, 440] as const;

/** Per-note balance — lower drones carry more body. */
const NOTE_GAINS = [0.32, 0.22, 0.14] as const;

export class TampuraDrone {
  private context: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private masterGain: GainNode | null = null;
  private config: TampuraConfig;

  constructor(config: Partial<TampuraConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  get isRunning(): boolean {
    return this.context !== null;
  }

  start(): void {
    if (this.context) return;

    const AudioContextCtor =
      window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextCtor) {
      throw new Error("Web Audio API is not available in this browser.");
    }

    this.context = new AudioContextCtor();
    const now = this.context.currentTime;

    // Master gain handles the fade-in/out envelope.
    this.masterGain = this.context.createGain();
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(this.config.volume, now + this.config.fadeSeconds);

    // Low-pass filter softens the high harmonics so the drone reads as warm
    // rather than thin or piercing.
    const filter = this.context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 900;
    filter.Q.value = 0.7;

    // Slow LFO modulating master gain creates a subtle breathing motion.
    const lfo = this.context.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.08; // ~7.5s breath cycle
    const lfoGain = this.context.createGain();
    lfoGain.gain.value = 0.025;
    lfo.connect(lfoGain).connect(this.masterGain.gain);
    lfo.start();
    this.oscillators.push(lfo);

    NOTES.forEach((frequency, index) => {
      const noteGain = this.context!.createGain();
      noteGain.gain.value = NOTE_GAINS[index] ?? 0.2;

      // Two slightly detuned sines per note → chorused, alive timbre.
      [-3, 0, 3].forEach((centsOffset) => {
        const oscillator = this.context!.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        oscillator.detune.value = centsOffset;
        oscillator.connect(noteGain);
        oscillator.start(now);
        this.oscillators.push(oscillator);
      });

      noteGain.connect(filter);
    });

    filter.connect(this.masterGain);
    this.masterGain.connect(this.context.destination);
  }

  async stop(): Promise<void> {
    const context = this.context;
    const masterGain = this.masterGain;
    if (!context || !masterGain) return;

    const now = context.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(0, now + this.config.fadeSeconds);

    await new Promise<void>((resolve) =>
      setTimeout(resolve, this.config.fadeSeconds * 1000 + 100),
    );

    this.oscillators.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        /* already stopped */
      }
    });
    this.oscillators = [];

    await context.close();
    this.context = null;
    this.masterGain = null;
  }
}
