import { cn } from "@/lib/utils/cn";

interface MarigoldToranProps {
  /** Number of items strung across the curve. Defaults to 19 (alternating). */
  count?: number;
  /** Class applied to the outer SVG element for positioning. */
  className?: string;
}

/**
 * Marigold toran (पुष्प-वंदनवार) — the traditional doorway garland of
 * marigold flowers and mango leaves draped in a catenary swag.
 *
 * Pure SVG. Each item alternates flower / leaf along a quadratic Bezier
 * curve so the row reads as one continuous string. Use at the top and
 * bottom of a section to frame it like an Indian doorway welcome.
 *
 * Note on rendering: every trig-derived coordinate is rounded to 3
 * decimals via `r()`. Without that, V8 on the server and the browser
 * occasionally serialise the same `Math.sin` result with a 1-ulp
 * difference (e.g. `-4.832421753117167` vs `-4.832421753117166`),
 * which trips React's hydration mismatch check. Rounding gives both
 * sides an identical string and the mismatch disappears.
 */
const r = (n: number) => Math.round(n * 1000) / 1000;

export function MarigoldToran({ count = 19, className }: MarigoldToranProps) {
  const W = 1200;
  const H = 100;

  // Catenary-ish curve y(t) = (1-t)² · 4 + 2(1-t)t · 36 + t² · 4
  const yAt = (t: number) => (1 - t) * (1 - t) * 4 + 2 * (1 - t) * t * 36 + t * t * 4;

  const items: React.ReactNode[] = [];

  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const cx = r(t * W);
    const cy = r(yAt(t));
    const isFlower = i % 2 === 0;

    if (isFlower) {
      const radius = 9 + ((i * 13) % 3);
      const hangLen = 12 + ((i * 7) % 6);
      items.push(
        <g key={i} transform={`translate(${cx}, ${cy})`}>
          <line x1={0} y1={0} x2={0} y2={hangLen - 2} stroke="#562E26" strokeOpacity={0.35} strokeWidth={0.6} />
          <g transform={`translate(0, ${hangLen + radius})`}>
            {Array.from({ length: 12 }).map((_, k) => {
              const a = (k / 12) * Math.PI * 2;
              const px = r(Math.cos(a) * radius * 0.62);
              const py = r(Math.sin(a) * radius * 0.62);
              const deg = r((a * 180) / Math.PI);
              return (
                <ellipse
                  key={k}
                  cx={px}
                  cy={py}
                  rx={r(radius * 0.55)}
                  ry={r(radius * 0.36)}
                  fill="#E87722"
                  transform={`rotate(${deg}, ${px}, ${py})`}
                  opacity={0.92}
                />
              );
            })}
            {Array.from({ length: 8 }).map((_, k) => {
              const a = (k / 8) * Math.PI * 2 + 0.2;
              return (
                <circle
                  key={k}
                  cx={r(Math.cos(a) * radius * 0.32)}
                  cy={r(Math.sin(a) * radius * 0.32)}
                  r={r(radius * 0.3)}
                  fill="#FBB04C"
                />
              );
            })}
            <circle cx={0} cy={0} r={r(radius * 0.28)} fill="#9D3A2F" />
            <circle cx={0} cy={0} r={r(radius * 0.1)} fill="#562E26" />
          </g>
        </g>,
      );
    } else {
      const hangLen = 8 + ((i * 5) % 4);
      items.push(
        <g key={i} transform={`translate(${cx}, ${cy})`}>
          <line x1={0} y1={0} x2={0} y2={hangLen} stroke="#562E26" strokeOpacity={0.35} strokeWidth={0.6} />
          <g transform={`translate(0, ${hangLen + 14})`}>
            <path d="M 0 -14 C 8 -10, 9 6, 0 16 C -9 6, -8 -10, 0 -14 Z" fill="#3A4F3C" />
            <path d="M 0 -12 C 5 -8, 6 4, 0 14 C -6 4, -5 -8, 0 -12 Z" fill="#253327" opacity={0.65} />
            <line x1={0} y1={-12} x2={0} y2={14} stroke="#1B1612" strokeOpacity={0.35} strokeWidth={0.5} />
          </g>
        </g>,
      );
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={cn("pointer-events-none w-full", className)}
    >
      <path
        d={`M 0 4 Q ${W / 2} 60 ${W} 4`}
        fill="none"
        stroke="#562E26"
        strokeOpacity={0.45}
        strokeWidth={0.8}
      />
      <circle cx={2} cy={4} r={3} fill="#9D3A2F" />
      <circle cx={W - 2} cy={4} r={3} fill="#9D3A2F" />
      {items}
    </svg>
  );
}
