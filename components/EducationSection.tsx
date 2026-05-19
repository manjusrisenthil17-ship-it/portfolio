import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-muted-foreground">{edu.college}</p>
          <span className="text-sm text-muted-foreground">
            Class of {edu.graduationYear}
          </span>
        </div>
      ))}
    </section>
  );
}
