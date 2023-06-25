import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default layout;
