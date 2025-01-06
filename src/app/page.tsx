import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Features />
    <Mega />
    <Footer />
    </div>
  );
}
