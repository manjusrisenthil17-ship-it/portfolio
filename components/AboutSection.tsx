import { summary } from "@/data/summary";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-muted-foreground">{summary}</p>
    </section>
  );
}
