// components/ui/ComingSoonCard.tsx

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComingSoonDestination } from "@/types/destination";

type ComingSoonCardProps = {
  destination: ComingSoonDestination;
};

export function ComingSoonCard({ destination }: ComingSoonCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={destination.imageUrl}
          alt={`Image of ${destination.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            {destination.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 pt-4">
          <p className="text-gray-600">{destination.description}</p>
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button
            disabled
            className="w-full bg-gray-400 text-white cursor-not-allowed"
          >
            COMING SOON
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}