import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hundhak",
  description: "A community for dog lovers in Sweden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <div className={`${inter.className} bg-white`}>{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
