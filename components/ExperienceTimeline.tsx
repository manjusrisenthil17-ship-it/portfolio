import { experience } from "@/data/experience";
import { Calendar } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <ol className="relative border-l border-muted-foreground/20">
        {experience.map((exp, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
              <Calendar className="w-5 h-5 text-white" />
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold">
              {exp.role}
            </h3>
            <p className="mb-2 text-base font-normal text-muted-foreground">
              {exp.company} — {exp.location}
            </p>
            <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
              {exp.duration}
            </time>
          </li>
        ))}
      </ol>
    </section>
  );
}
