import { postRepository } from "@/repositories/post";
import { formatHour } from "@/utils/format-datetime";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export async function getCachedTime() {
  "use cache";
  cacheTag("posts");

  return formatHour(Date.now());
}

export async function findAllPublicPostsCached() {
  "use cache";
  cacheTag("posts");

  return await postRepository.findAllPublic();
}

export async function findPostBySlugCached(slug: string) {
  "use cache";
  cacheTag(`post-${slug}`);

  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
}

export async function findPostByIdCached(id: string) {
  "use cache";
  cacheTag(`post-id-${id}`);

  return await postRepository.findById(id);
}
