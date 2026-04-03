import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brother Refrigerator Center",
  description: "Professional Appliance Repair Services in New York City - Fast, Reliable, and Affordable Solutions for Your Home Appliances. Contact Us Today for Expert Repairs and Maintenance!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body cz-shortcut-listen='true' className="min-h-full flex flex-col">
        <ThemeProvider defaultTheme="light" storageKey="next-ui-theme">
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
