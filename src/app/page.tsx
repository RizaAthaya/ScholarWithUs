"use client";
import Hero from "@/components/home/Hero";
import Mentor from "@/components/home/Mentor";
import Program from "@/components/home/Program";
import WhySWU from "@/components/home/WhySWU";
import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="py-14">
        <Hero />
        <Program />
        <button className="mt-12 bg-main text-white rounded-lg px-6 py-3 text-base font-semibold hover:bg-sec1 flex justify-center mx-auto">
          Lihat Beasiswa Lainnya
        </button>
      </div>
      <div>
        <WhySWU />
      </div>
      <div>
        <Mentor/>
      </div>
      <Footer />
    </div>
  );
}
