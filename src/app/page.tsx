import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
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
        <Link className="w-full h-full overflow-hidden rounded-xl" href="">
          <Image
            className="w-full h-full object-cover group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Post Title"
          />
        </Link>
        <div className="flex flex-col gap-4 sm-justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">2025-04-20 10:00</time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor</Link>
          </h1>
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
