import { Geist, Geist_Mono, Amiri, Orbitron } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AmiriArabic = Amiri({
  variable: "--font-amiri-arabic",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});
const orbitronEnglish = Orbitron({
  variable: "--font-orbitron-english",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://your-app-url.vercel.app"),
  title: "Zikir Counter | Digital Tasbih",
  description:
    "A minimalist, multi-language digital tasbih for your daily Zikir.",
  openGraph: {
    title: "Zikir Counter",
    description:
      "Multi-language support, haptic feedback, and progress tracking.",
    url: "https://your-app-url.vercel.app",
    siteName: "Zikir Counter",
    images: [
      {
        url: "/preview-app.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#FDFCE8] ${geistSans.variable} ${geistMono.variable}  ${AmiriArabic.variable} ${orbitronEnglish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
