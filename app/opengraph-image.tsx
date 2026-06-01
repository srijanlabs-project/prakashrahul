import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(circle at 20% 20%, #06b6d4 0%, #0f172a 48%, #020617 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05 }}>
          Rahul Prakash
        </div>
        <div style={{ fontSize: 40, marginTop: 18, color: "#67e8f9" }}>
          Product Management Leader
        </div>
        <div style={{ fontSize: 30, marginTop: 16, color: "#cbd5e1" }}>
          Digital Commerce | AI Product Strategy | Platform Transformation
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
