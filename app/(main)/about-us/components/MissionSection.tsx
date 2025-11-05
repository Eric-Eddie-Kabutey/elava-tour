const MissionSection = ({id}: {id: string}) => {
  return (
    <section className="py-12 bg-[#e4e4e4]" id={id}>
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-12 lg:pb-24  ">
        <h2 className="text-3xl font-bold mb-6 text-black">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to empower businesses and individuals through cutting-edge technology solutions.       
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">We believe in creating products that not only solve problems but also inspire innovation and growth.</p>

        <p className="text-lg text-gray-700 leading-relaxed">Our commitment to excellence drives us to continuously improve and adapt in a fast-paced digital landscape.</p>
      </div>
    </section>
  );
};

export default MissionSection; 