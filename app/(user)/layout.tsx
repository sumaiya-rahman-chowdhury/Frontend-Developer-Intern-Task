import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ReactNode } from "react";
import MobileNavbar from "@/components/shared/MobileNavbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      {children}
      <Footer />
    </div>
  );
}
