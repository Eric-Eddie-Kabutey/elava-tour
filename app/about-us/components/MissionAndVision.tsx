import { missionVisionData } from "@/data/mission-vision";
import { cn } from "@/lib/utils";


export const MissionVisionSection = () => {
  return (
    <section id="mission-and-vision" className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Responsive Grid: 1 column on mobile, 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {missionVisionData.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "space-y-4",
                // This adds the dotted line separator to the second column on desktop
                index > 0 && "md:border-l md:border-dotted md:border-gray-400 md:pl-8"
              )}
            >
              <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-700 text-justify leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};