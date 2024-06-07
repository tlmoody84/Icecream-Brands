import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icecream-Brands",
  description: "I love icecream.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
      <footer className="text-center">&copy; Icecream-Brands</footer>
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
