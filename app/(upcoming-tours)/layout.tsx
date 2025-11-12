import { Header } from "@/components/layout/upcoming-tours/header";
import MainFooter from "@/components/shared/main-footer";

export default function UpcomingTourLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    <Header />
    {children}
    <MainFooter />
  </>);
}
