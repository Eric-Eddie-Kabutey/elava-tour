import { CheckCircle2, XCircle } from "lucide-react";

type InclusionItemProps = {
  type: "included" | "excluded";
  label: string;
  description: string;
};

export function InclusionItem({ type, label, description }: InclusionItemProps) {
  const isIncluded = type === "included";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b py-4">
      {/* Left Column: Icon and Label */}
      <div className="md:col-span-1 flex items-center gap-3">
        {isIncluded ? (
          <CheckCircle2 className="h-6 w-6 text-yellow-opaque flex-shrink-0" />
        ) : (
          <XCircle className="h-6 w-6 text-gray-400 flex-shrink-0" />
        )}
        <span className="font-semibold text-gray-800">{label}</span>
      </div>

      {/* Right Column: Description */}
      <div className="md:col-span-2">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}