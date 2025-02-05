import { Background } from "../components/background";
import { Features } from "../components/features";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <main className="flex-1">
        <Background />
        <Hero />
        <Features />
      </main>
    </div>
  );
}
