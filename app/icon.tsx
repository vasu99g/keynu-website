import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Generated favicon — a saffron orb on the mogra canvas as a placeholder
 * brand mark. Will be replaced with the official Keynu kinu emblem once
 * supplied as an SVG.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFEF0",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#FBB04C",
          }}
        />
      </div>
    ),
    size,
  );
}
