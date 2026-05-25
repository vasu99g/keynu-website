import { useId } from "react";

interface ArchPortalProps {
  /** Image src to display inside the arch. */
  imageSrc: string;
  /** Optional alt text. */
  alt?: string;
}

/**
 * Jharokha (palace arch) portal — a pointed Mughal-style arch frame that
 * clips an image to its silhouette, layered with a warm golden-hour wash,
 * a grain texture, double-hairline border, mehndi corner flourishes, and
 * a small `+` keystone at the apex.
 *
 * Pure SVG (with a single bitmap inside the clip-path). No DOM rasterisation
 * needed; everything scales cleanly.
 */
export function ArchPortal({ imageSrc, alt = "" }: ArchPortalProps) {
  const W = 400;
  const H = 540;
  const uid = useId().replace(/[^a-z0-9]/gi, "");
  const clipId = `arch-clip-${uid}`;
  const washId = `arch-wash-${uid}`;
  const grainId = `arch-grain-${uid}`;

  const archPath =
    `M 12 ${H - 12} L 12 ${H * 0.55} ` +
    `C 12 ${H * 0.18}, ${W / 2 - 4} 24, ${W / 2} 14 ` +
    `C ${W / 2 + 4} 24, ${W - 12} ${H * 0.18}, ${W - 12} ${H * 0.55} ` +
    `L ${W - 12} ${H - 12} Z`;

  const archInnerPath =
    `M 22 ${H - 22} L 22 ${H * 0.555} ` +
    `C 22 ${H * 0.21}, ${W / 2 - 4} 36, ${W / 2} 28 ` +
    `C ${W / 2 + 4} 36, ${W - 22} ${H * 0.21}, ${W - 22} ${H * 0.555} ` +
    `L ${W - 22} ${H - 22} Z`;

  return (
    <svg
      role={alt ? "img" : "presentation"}
      aria-label={alt || undefined}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={archPath} />
        </clipPath>
        <linearGradient id={washId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FBB04C" stopOpacity={0.32} />
          <stop offset="0.55" stopColor="#562E26" stopOpacity={0} />
          <stop offset="1" stopColor="#562E26" stopOpacity={0.35} />
        </linearGradient>
        <pattern id={grainId} patternUnits="userSpaceOnUse" width={3} height={3}>
          <circle cx={1} cy={1} r={0.4} fill="#562E26" opacity={0.1} />
        </pattern>
      </defs>

      <rect x={0} y={0} width={W} height={H} fill="#FFFEF0" />
      <path d={archPath} fill="#EADBB7" />
      <image
        href={imageSrc}
        x={-20}
        y={-20}
        width={W + 40}
        height={H + 40}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${clipId})`}
      />
      <path d={archPath} fill={`url(#${washId})`} />
      <path d={archPath} fill={`url(#${grainId})`} />
      <path d={archPath} fill="none" stroke="#562E26" strokeOpacity={0.45} strokeWidth={1.2} />
      <path d={archInnerPath} fill="none" stroke="#562E26" strokeOpacity={0.28} strokeWidth={0.6} />

      {/* keystone + at the apex */}
      <g transform={`translate(${W / 2}, 6)`} opacity={0.85}>
        <path d="M 0 -4 L 0 8 M -6 2 L 6 2" stroke="#FBB04C" strokeWidth={1.3} strokeLinecap="round" />
      </g>

      {/* mehndi corner flourishes — bottom left */}
      <g transform={`translate(12, ${H - 12})`} opacity={0.55}>
        <path
          d="M 0 0 Q 40 -4 56 -28 M 0 0 Q 20 -22 14 -50 M 0 0 Q 60 -16 80 -52"
          fill="none"
          stroke="#562E26"
          strokeWidth={0.55}
        />
        <circle cx={48} cy={-24} r={1.6} fill="#FBB04C" />
        <circle cx={20} cy={-44} r={1.4} fill="#9D3A2F" />
        <circle cx={74} cy={-48} r={1.4} fill="#E87722" />
      </g>

      {/* mehndi corner flourishes — bottom right (mirrored) */}
      <g transform={`translate(${W - 12}, ${H - 12}) scale(-1, 1)`} opacity={0.55}>
        <path
          d="M 0 0 Q 40 -4 56 -28 M 0 0 Q 20 -22 14 -50 M 0 0 Q 60 -16 80 -52"
          fill="none"
          stroke="#562E26"
          strokeWidth={0.55}
        />
        <circle cx={48} cy={-24} r={1.6} fill="#FBB04C" />
        <circle cx={20} cy={-44} r={1.4} fill="#9D3A2F" />
        <circle cx={74} cy={-48} r={1.4} fill="#E87722" />
      </g>
    </svg>
  );
}
