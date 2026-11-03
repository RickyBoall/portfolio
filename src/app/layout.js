import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header, MotionProvider } from "@/components";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Sukhraj Boall | Software Developer",
  description: "Full-stack software developer in Toronto building products, backend services and cloud infrastructure. Experience, results and resume.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${hanken.className} bg-bg text-ink antialiased`}>
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: ".reveal{opacity:1!important;transform:none!important}" }} />
        </noscript>
        <MotionProvider>
          <Header />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
