"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, ResumeButton } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-800`}>
        {children}
        {/* <div className="absolute bottom-0 right-0 overflow-hidden">
          <ResumeButton />
        </div> */}
      </body>
    </html>
  );
}
