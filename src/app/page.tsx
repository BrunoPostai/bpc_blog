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
        <div className="flex flex-col gap-4 sm-justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            2025-04-20 10:00
          </time>
          <PostHeading as="h3" url="#">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </PostHeading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            recusandae eos distinctio cupiditate qui necessitatibus praesentium?
            Quidem incidunt cumque provident aliquam ipsa corrupti eos ratione
            repellat hic obcaecati, quasi numquam?
          </p>
        </div>
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
