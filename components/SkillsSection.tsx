import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2 capitalize">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill: string) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
