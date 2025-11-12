import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-yellow-opaque p-8">
      <div className="text-center space-y-6 max-w-lg mx-auto">
                
        <h1 className="text-9xl font-extrabold text-green-opaque tracking-wider">
          404
        </h1>
        
        {/* The main heading */}
        <h2 className="text-4xl font-semibold text-green-opaque">
          Page Not Found
        </h2>
        
        {/* A user-friendly description */}
        <p className="text-lg text-white">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        
        {/* The button to go back home */}
        <Button
          asChild
          size="lg"
          className="bg-transparent text-green-opaque border border-green-opaque hover:bg-green-opaque hover:text-yellow-opaque font-bold px-8 py-3 text-base"
        >
          <Link href="/">
            Go Back to Homepage
          </Link>
        </Button>
      </div>
    </main>
  );
}