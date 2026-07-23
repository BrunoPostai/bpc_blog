import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SPQR Times — Vox Populi Romani",
    template: "%s | SPQR Times",
  },
  description: "Acta diurna populi Romani — The daily news of the Roman people.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html>
      <body>
        <Container>
          <Header />

          {children}
          
          <Footer />
        </Container>
      </body>
    </html>
  );
}
