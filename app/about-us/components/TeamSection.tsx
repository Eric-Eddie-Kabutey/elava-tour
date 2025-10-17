import { TeamMemberCard } from "./TeamMemberCard";

const teamMembers = [
  // ... Paste the updated teamMembers array from Step 1 here ...
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/assets/images/team/team.avif",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "/assets/images/team/team.avif",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/assets/images/team/team.avif",
    linkedinUrl: "https://www.linkedin.com/in/mikejohnson",
  },
];

const TeamSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-16 bg-[#e4e4e4]">
      <div className="container mx-auto px-4 bg-[#f0f2f3] py-12 lg:pb-24">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">The passionate people behind our success.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;