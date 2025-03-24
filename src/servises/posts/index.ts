class PostsService {
  public async getPostsByIdetifier(identifier: string) {
    switch (identifier) {
      case "hp_posts":
        const data = await fetch(
          "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId",
        );
        return data.json();
      default: {
        const data = await fetch(
          "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId",
        );
        return data.json();
      }
    }
  }
}

export const postsService = new PostsService();
