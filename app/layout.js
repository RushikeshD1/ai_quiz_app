import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased `}
      >
        <div className="min-h-screen flex flex-col dark:bg-black">
          <Header />

          <main className="flex-1  text-white flex flex-col items-center justify-center px-6 p-10 overflow-hidden">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}