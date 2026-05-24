"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { TampuraDrone } from "@/lib/audio/tampura";

interface BackgroundAudioContextValue {
  isPlaying: boolean;
  toggle: () => void;
}

const BackgroundAudioContext = createContext<BackgroundAudioContextValue | null>(null);

/**
 * Provides ambient background audio — a synthesised tampura drone — for the
 * whole site.
 *
 * Off by default; users opt-in via the AudioToggle in the header. The drone
 * is generated with the Web Audio API (see `lib/audio/tampura.ts`), so no
 * external audio file is required. The synth pauses when the tab is hidden
 * so users don't return to forgotten background sound, and resumes only when
 * the user toggles it on again.
 */
export function BackgroundAudioProvider({ children }: { children: ReactNode }) {
  const droneRef = useRef<TampuraDrone | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Pause the drone if the tab becomes hidden — never restart automatically.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden && droneRef.current?.isRunning) {
        void droneRef.current.stop();
        droneRef.current = null;
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const toggle = useCallback(() => {
    if (droneRef.current?.isRunning) {
      void droneRef.current.stop();
      droneRef.current = null;
      setIsPlaying(false);
      return;
    }

    try {
      const drone = new TampuraDrone();
      drone.start();
      droneRef.current = drone;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  return (
    <BackgroundAudioContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </BackgroundAudioContext.Provider>
  );
}

export function useBackgroundAudio(): BackgroundAudioContextValue {
  const context = useContext(BackgroundAudioContext);
  if (!context) {
    throw new Error("useBackgroundAudio must be used within BackgroundAudioProvider");
  }
  return context;
}
