const ValuesSection = ({id}: {id: string}) => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new possibilities in technology."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and shared success."
    }
  ];

  return (
    <section id={id} className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection; 