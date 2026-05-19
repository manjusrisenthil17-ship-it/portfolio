import { socialLinks } from "@/data/socialLinks";
import { Github, Linkedin } from "lucide-react";

const icons: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t mt-8">
      <div className="flex justify-center gap-4 mb-2">
        {socialLinks.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Manjusri S. All rights reserved.
      </p>
    </footer>
  );
}
