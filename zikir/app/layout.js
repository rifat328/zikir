import { Geist, Geist_Mono, Amiri, Orbitron } from "next/font/google";
import localFont from "next/font/local";
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

const nicoMoji = localFont({
  src: "../public/fonts/NicoMoji-Regular.ttf",
  variable: "--font-nico-moji",
  display: "swap",
});
export const metadata = {
  title: "Zikir App",
  description: "Do your daily Zikir (Digital tasbih , Zikir Counter)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#FDFCE8] ${geistSans.variable} ${geistMono.variable} ${nicoMoji.variable} ${AmiriArabic.variable} ${orbitronEnglish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
