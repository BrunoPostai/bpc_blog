import { Container } from "@/components/Container";
import { FeaturedPost } from "@/components/FeaturedPost";
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
      <FeaturedPost/>
      <Suspense fallback={<SpinLoader className="h-screen" />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">FOOTER</p>
      </footer>
    </Container>
  );
}
