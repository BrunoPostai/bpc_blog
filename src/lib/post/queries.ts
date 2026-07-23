import { postRepository, JSON_POST_FILE_PATH } from "@/repositories/post";
import { formatHour } from "@/utils/format-datetime";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { stat } from "fs/promises";

async function cacheTagWithMtime(base: string) {
  const { mtimeMs } = await stat(JSON_POST_FILE_PATH);
  return `${base}-${mtimeMs}`;
}

export async function getCachedTime() {
  "use cache";
  cacheTag(await cacheTagWithMtime("posts"));

  return formatHour(Date.now());
}

export async function findAllPublicPostsCached() {
  "use cache";
  cacheTag(await cacheTagWithMtime("posts"));

  return await postRepository.findAllPublic();
}

export async function findPostBySlugCached(slug: string) {
  "use cache";
  cacheTag(await cacheTagWithMtime(`post-${slug}`));

  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
}

export async function findPostByIdCached(id: string) {
  "use cache";
  cacheTag(await cacheTagWithMtime(`post-id-${id}`));

  return await postRepository.findById(id);
}
