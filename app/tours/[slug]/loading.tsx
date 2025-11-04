import { Skeleton } from "@/components/ui/skeleton";

function TourCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 rounded-lg border p-4">
      <Skeleton className="h-48 w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  );
}

export default function LoadingToursPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-12 mt-28">
      <Skeleton className="h-12 w-1/2 mb-4" />
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-6 w-3/4 mb-12" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TourCardSkeleton />
        <TourCardSkeleton />
        <TourCardSkeleton />
      </div>
    </div>
  );
}