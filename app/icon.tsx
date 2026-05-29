import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "white",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <rect x="18" y="5" width="5" height="9" rx="2.5" fill="#16a095" />
          <rect x="33" y="5" width="5" height="9" rx="2.5" fill="#16a095" />
          <rect
            x="8"
            y="12"
            width="40"
            height="34"
            rx="5"
            stroke="#16a095"
            strokeWidth="2.5"
            fill="white"
          />
          <rect x="12" y="17" width="7.5" height="7.5" rx="1.5" fill="#d9eded" />
          <rect x="21.5" y="17" width="7.5" height="7.5" rx="1.5" fill="#d9eded" />
          <rect x="31" y="17" width="7.5" height="7.5" rx="1.5" fill="#16a095" />
          <rect x="40.5" y="17" width="7.5" height="7.5" rx="1.5" fill="#d9eded" />
          <rect x="12" y="26.5" width="7.5" height="7.5" rx="1.5" fill="#16a095" />
          <rect x="21.5" y="26.5" width="7.5" height="7.5" rx="1.5" fill="#d9eded" />
          <rect x="31" y="26.5" width="7.5" height="7.5" rx="1.5" fill="#f37032" />
          <rect x="40.5" y="26.5" width="7.5" height="7.5" rx="1.5" fill="#d9eded" />
          <circle cx="17" cy="44" r="4.5" fill="#16a095" />
          <circle cx="28" cy="42.5" r="5.5" fill="#0d2c5c" />
          <circle cx="39" cy="44" r="4.5" fill="#16a095" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
