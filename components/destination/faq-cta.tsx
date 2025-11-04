import Link from "next/link";
import { Button } from "@/components/ui/button";

type FaqCtaProps = {
  countryName: string;
  introText: string;
  readMoreLink: string;
};

export function FaqCta({
  countryName,
  introText,
  readMoreLink,
}: FaqCtaProps) {
  return (
    // The bottom border uses the custom-gold color defined previously
    <section className="bg-gray-200 border-b-4 border-custom-gold">
      <div className="container mx-auto px-4 py-20 text-center">
        {/* Max-width wrapper for readability */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 uppercase mb-6">
            FAQs & WHAT TO EXPECT
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {introText}
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 font-semibold tracking-wide uppercase px-8 py-3"
          >
            <Link href={readMoreLink}>Read More - {countryName}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}