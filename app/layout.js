import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body className="bg-gradient-to-b h-screen overflow-hidden from-sky-950 to-slate-950 bg-fixed">
        {children}
      </body>
    </html>
  );
}
