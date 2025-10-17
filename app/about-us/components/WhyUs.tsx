const WhyUs = ({id}: {id: string}) => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
    },
    {
      name: "Jane Smith",
      role: "CTO",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
    }
  ];

  return (
    <section id={id} className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs; 