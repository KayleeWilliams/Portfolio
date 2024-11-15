import { BentoItem } from "@/types/bento";
import AboutCard from "@/components/bento/cards/AboutCard";
import ProjectCard from "@/components/bento/cards/ProjectCard";
// import ContactCard from "@/components/bento/cards/ContactCard";
import SkillsCard from "@/components/bento/cards/SkillsCard";

interface BentoCardProps {
  item: BentoItem;
  isExpanded?: boolean;
}

export default function BentoCard({
  item,
  isExpanded = false,
}: BentoCardProps) {
  // Handle different card sizes with Tailwind classes
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2",
    large: "col-span-2 row-span-2",
  }[item.size || "small"];

  return (
    <div className={sizeClasses}>
      {(() => {
        switch (item.type) {
          case "about":
            return <AboutCard {...item} />;
          case "project":
            return <ProjectCard {...item} isExpanded={isExpanded} />;
          // case "contact":
          //   return <ContactCard {...item} />;
          case "skills":
            return <SkillsCard {...item} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
