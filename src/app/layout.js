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
    viewport: "width=device-width, initial-scale=1.0",
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
