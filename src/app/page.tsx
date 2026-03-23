import { FeaturedPost } from "@/components/FeaturedPost";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <FeaturedPost />
      <Suspense fallback={<SpinLoader className="h-screen" />}>
        <PostsList />
      </Suspense>
    </>
  );
}
