const VisionSection = ({id}: {id: string}) => {
  return (
      <section className="py-12 bg-[#e4e4e4]" id={id}>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-12 lg:pb-24  ">
                <h2 className="text-3xl font-bold mb-6 text-black">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our vision is to be a global leader in providing innovative travel solutions that enhance the customer experience.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">We aim to leverage technology to create seamless and personalized travel experiences for our clients.</p>

                <p className="text-lg text-gray-700 leading-relaxed">Our focus on sustainability and responsible tourism drives us to make a positive impact on the communities we serve.</p>
              
          </div>
    </section>
  );
};

export default VisionSection;