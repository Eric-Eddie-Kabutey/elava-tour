import Link from "next/link";
import { Button } from "@/components/ui/button";

type FunFactsCtaProps = {
  countryName: string;
  introText: string;
  readMoreLink: string;
};

export function FunFactsCta({
  countryName,
  introText,
  readMoreLink,
}: FunFactsCtaProps) {
  return (
    // The top border uses the custom-gold color defined previously
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20 text-center">
        {/* Max-width wrapper to keep content from getting too wide */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-opaque uppercase mb-6">
            FUN FACTS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {introText}
          </p>
          <Button
            asChild
            className="bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque font-semibold tracking-wide uppercase px-8 py-3"
          >
            {/* The button text and link are now built directly from props */}
            <Link href={readMoreLink}>Read More - {countryName}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}