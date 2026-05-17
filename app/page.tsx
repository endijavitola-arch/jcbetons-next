import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Works from "@/components/Works";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

// Defer all Client Components that are below the fold — reduces initial JS parse/eval
const Stats = dynamic(() => import("@/components/Stats"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Fleet />
        <About />
        <Works />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
