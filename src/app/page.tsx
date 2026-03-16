import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/asada",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Images alt",
            priority: true,
          }}
        />
        
      </section>

      <Suspense fallback={<SpinLoader className="h-screen" />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">FOOTER</p>
      </footer>
    </Container>
  );
}
