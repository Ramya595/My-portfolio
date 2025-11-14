import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Your Name — Full Stack Engineer",
  description: "Full Stack Engineer — React, Next.js, Node.js, FastAPI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-screen pt-0">
          <div className="max-w-6xl mx-auto px-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
