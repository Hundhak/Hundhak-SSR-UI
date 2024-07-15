import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hundhak",
  description: "A community for dog lovers in Sweden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
