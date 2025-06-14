import type { Metadata } from "next";
import {Inter, Jua} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer";
import Social from "@/app/components/social";
import Mouse from "@/app/components/mouse";

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

const jua = Jua({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Ali YAGMUR - Personal website",
  description: "Personal website with blogs and projects",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can add other head tags here if you want */}
      </head>
      <body className={`${inter.className} ${jua.className}`} style={{display: "flex", flexDirection: "column"}}>
        <Mouse />
        {children}
        <Footer />
        <Social />
      </body>
    </html>
  );
}
