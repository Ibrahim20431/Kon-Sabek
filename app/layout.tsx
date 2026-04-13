import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "كن سابق - منصة تعليمية متميزة",
  description:
    "كن سابق - منصة تعليمية رائدة تقدم دروساً خصوصية عبر الإنترنت، تعليم البرمجة، ومهارات العمل الحر. ابدأ مستقبلك من الآن!",
  keywords: [
    "كن سابق",
    "تعليم",
    "دروس خصوصية",
    "برمجة",
    "عمل حر",
    "أونلاين",
    "تعليم عن بعد",
    "دروس خصوصية اونلاين",
  "دروس اعدادي",
  "مدرسين اونلاين مصر",
  "تعليم اونلاين للاعدادي",
  "شرح رياضيات اعدادي",
  "شرح علوم اعدادي",
  "تعليم البرمجة للاطفال",
  "تعلم البرمجة للمبتدئين",
  "شغل اونلاين للطلاب",
  "منصة تعليمية مصر",
  "تعليم عن بعد مصر",
  "كورسات اونلاين مصر",
  "كن سابق"
  ],
  authors: [{ name: "كن سابق" }],
  creator: "كن سابق",
  openGraph: {
    title: "كن سابق | Be Ahead",
    description: "منصة تعليمية رائدة - ابدأ مستقبلك من الآن",
    type: "website",
    locale: "ar_SA",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B3E26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
