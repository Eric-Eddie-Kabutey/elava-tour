import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define a type for the member prop for type safety
type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
};

export const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* ===== CARD HEADER (IMAGE & NAME OVERLAY) ===== */}
      <div className="relative h-80">
        <Image
          src={member.image}
          alt={`Photo of ${member.name}`}
          fill // Makes the image fill the parent container
          className="object-cover" // Ensures the image covers the area without distortion
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {member.name}
        </h3>
      </div>
      
      {/* ===== CARD BODY (ROLE & LINKEDIN BUTTON) ===== */}
      <div className="p-4 flex justify-between items-center">
        <p className="text-gray-600">{member.role}</p>
        <Button asChild variant="outline" size="icon">
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn Profile`}>
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};