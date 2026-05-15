import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const MainLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1 pb-14 md:pb-0">
      <Outlet />
    </main>
    <Footer />
    <BottomNav />
  </div>
);

export default MainLayout;
