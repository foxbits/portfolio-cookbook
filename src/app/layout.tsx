import type { Metadata } from "next";
import ClientLayout from './components/ClientLayout';
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Marian Focșa (FX) - Professional Profile Page | CV | Portfolio",
  description: "Who is Marian Focșa? View the CV, Portfolio and Professional Profile Page",
  keywords: "marian focsa, marian focșa, marian fx, marian.focsa, marian.fx, marian focsa cv, cv, .net developer, software developer, technical lead, foxbites, foxbites.net, marian@foxbites.net",
  authors: [{ name: "foxbites" }],
  openGraph: {
    title: "Marian Focșa (FX) - Professional Profile Page | CV | Portfolio",
    description: "Who is Marian Focșa? View the CV, Portfolio and Professional Profile Page",
    type: "website",
    images: "img/logos/logo2.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  );
}
