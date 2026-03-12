import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <header className="text-6xl font-bold text-center py-8">
        Aqui fica a header
      </header>
      <Suspense fallback={<SpinLoader className="h-screen"/>}>
        <PostsList />
      </Suspense>

      <footer>
        <p>FOOTER</p>
      </footer>
    </div>
  );
}
