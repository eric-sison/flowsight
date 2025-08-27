import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "../components/ReactQueryProvider";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowsight",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden antialiased`}>
        <ReactQueryProvider>
          {/* prettier-ignore */}
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
