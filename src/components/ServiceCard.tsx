import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import DynamicIcon from "./DynamicIcon";

interface ServiceCardProps {
  icon: LucideIcon | string;
  title: string;
  description: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, image }: ServiceCardProps) => {
  const isStringIcon = typeof Icon === 'string';
  
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4">
          <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary-dark group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            {isStringIcon ? (
              <DynamicIcon name={Icon as string} className="h-6 w-6" />
            ) : (
              <Icon className="h-6 w-6" />
            )}
          </div>
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
