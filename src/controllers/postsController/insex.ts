import { Context } from "hono";
import { postsService } from "@/servises/posts";

export const postsController = async (c: Context) => {
  const identifier = c.req.param("identifier");
  if (!identifier) {
    return c.json({ error: "identifier is required" });
  }

  const posts = await postsService.getPostsByIdetifier(identifier);

  if (posts && posts.posts?.length > 0) {
    return c.json(posts.posts);
  }
  return c.json({ error: "posts not found" });
};
