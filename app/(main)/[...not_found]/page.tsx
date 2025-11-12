import { notFound } from 'next/navigation';
import MainNotFound from '../NotFoundComponent'; 

export default function NotFoundCatchAll() {
  // Send a 404 status code for SEO and correct browser behavior.
  notFound();
  
  // Render your custom 404 UI.
  // This component will be wrapped by your app/(main)/layout.tsx.
  return <MainNotFound />;
}