import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme";

export const metadata: Metadata = {
  title: "Sumariz AI",
  description: `Simplify your text content within seconds with Sumariz.ai, type or
  upload images or pdf text and click "Summarize"`,
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased w-full min-w-[320px]",
            fontSans.variable
          )}
        >
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
