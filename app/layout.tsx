import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { generateMetadata } from "./metadata";
import Navbar from "@/components/shared/Navbar";
import MainFooter from "@/components/shared/main-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata({
  title: "KtechHub | Empowering Businesses with Tailored Tech Solutions",
  description: "KtechHub delivers cutting-edge digital solutions to empower businesses, offering expertise in software development, API integration, and cloud technologies.",
  url: "/",
});

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KtechHub",
  "url": "https://www.ktechhub.com",
  "logo": "https://ktechhub.s3.amazonaws.com/images/KtechHub.png",
  "sameAs": [
    "https://www.instagram.com/ktechhub",
    "https://www.facebook.com/ktechhub",
    "https://twitter.com/ktechhub",
    "https://www.linkedin.com/company/ktechhub"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <MainFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
