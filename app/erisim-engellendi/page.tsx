import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Erişim Kullanılamıyor | ${SITE.name}`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AccessBlockedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background:
          "radial-gradient(circle at top, #52101f 0%, #160307 48%, #090102 100%)",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "620px",
          padding: "48px 32px",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            margin: "0 auto 24px",
            display: "grid",
            placeItems: "center",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #f43f5e, #9f1239)",
            fontSize: "28px",
            fontWeight: 900,
          }}
        >
          G
        </div>

        <p
          style={{
            marginBottom: "12px",
            color: "#fda4af",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {SITE.name}
        </p>

        <h1
          style={{
            marginBottom: "16px",
            fontSize: "clamp(30px, 7vw, 52px)",
            lineHeight: 1.05,
          }}
        >
          Bu bölgede erişim kullanılamıyor
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "17px",
            lineHeight: 1.7,
          }}
        >
          Bu hizmet bulunduğunuz ülke veya bölge için kullanıma
          sunulmamaktadır.
        </p>
      </section>
    </main>
  );
}