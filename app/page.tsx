import { Background } from "./_components/background";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />
      <main className="flex-1">
        <Background />
        <Hero />
        <Features />
      </main>
    </div>
  );
}
