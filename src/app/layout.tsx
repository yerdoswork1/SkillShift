// app/layout.tsx
import type { Metadata } from "next";
import { inter } from "@/assets/fonts/fonts";
import "./globals.css";
import "@/lib/i18n";

export const metadata: Metadata = {
  title: "SkillShift",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
