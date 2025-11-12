
import Header from "@/components/layout/header";
import MainFooter from "@/components/shared/main-footer";

export default function MainPageLayout({
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
