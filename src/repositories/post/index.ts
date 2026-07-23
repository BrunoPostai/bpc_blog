import { JsonPostRepository } from "./json-post-repository";
import type { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new JsonPostRepository();
export { JSON_POST_FILE_PATH } from "./json-post-repository";