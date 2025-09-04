import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/section/Navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Tracking App",
    description: "We are tracking you.",
};
export const viewport = {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row`}
      >
<Navigation></Navigation>
        {children}
      </body>
    </html>
  );
}
