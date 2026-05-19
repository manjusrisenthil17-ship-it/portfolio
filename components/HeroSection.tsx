import { personalInfo } from "@/data/personalInfo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center py-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {personalInfo.fullName}
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        {personalInfo.title}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground mb-6">
        {personalInfo.tagline}
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <Link href="#contact">
          <Button size="lg">Contact Me</Button>
        </Link>
        <a href="/resume.pdf" download>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
}
