import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Profile from "./profile";
import StoreProvider from "@/Providers/store-provider";
import React from "react";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <p className="text-3xl font-bold">From Next Js</p>
          <Profile />
          <div className="flex gap-2 items-center">
            <Link href="/admin">Admin</Link>
            <Link href="/test">Test</Link>
            <Link href="/demo-1">Demo-1</Link>
            <Link href="/demo2">Demo-2</Link>
          </div>In Next.js (Listen for Message and Open Modal)
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
