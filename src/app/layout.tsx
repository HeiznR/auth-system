import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { inter } from "@/app/ui/fonts";
import Header from "./ui/header/header";
import SafeThemeProvider from "@/providers/SafeThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <GoogleOAuthProvider clientId="120412080798-lriq928ma6ovhe6glhqqj200rrjt8s32.apps.googleusercontent.com">
          <ReactQueryProvider>
            <SafeThemeProvider>
              <>
                <Header />
                {children}
              </>
            </SafeThemeProvider>
          </ReactQueryProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
