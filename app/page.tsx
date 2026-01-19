import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Cta from "@/components/Cta/Cta";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features/>

      {/* CTA */}
      <Cta/>

      {/* Footer */}
      <Footer/>

    </main>
  );
}
