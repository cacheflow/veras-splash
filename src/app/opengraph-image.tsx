import { ImageResponse } from "next/og";

export const alt = "Veras — Trust & safety for high-risk platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 80, background: "#fbfaf7", color: "#1c1917", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#1d6146", fontSize: 28 }}>VERAS · TRUST & SAFETY</div>
      <div style={{ display: "flex", maxWidth: 1000, fontSize: 72, fontWeight: 600, letterSpacing: -3 }}>Harassment. Harmful content. One coordinated response.</div>
      <div style={{ display: "flex", fontSize: 26, color: "#57534e" }}>Coordinated enforcement for high-risk platforms.</div>
    </div>,
    size,
  );
}
