import { notFound } from 'next/navigation';
import UpcomingToursNotFound from '../../NotFoundComponent'; 

export default function NotFoundCatchAll() {
  // Set the 404 status code
  notFound();

  // Render the tour-specific 404 UI.
  // This will be correctly wrapped by the (upcoming-tours)/layout.tsx
  return <UpcomingToursNotFound />;
}