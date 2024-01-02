import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main 
      className="w-full h-screen relative"
      style={{ 
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full h-screen bg-[#ffffffd5]">
        <Header />
        <Hero />
      </div>
    </main>
  )
}
