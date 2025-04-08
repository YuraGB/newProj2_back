class PostsService {
  public async getPostsByIdetifier(identifier: string) {
    switch (identifier) {
      case "hp_posts": {
        const data = await fetch(
          "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId,body,views",
        );
        return data.json();
      }
      case "hp_posts_2": {
        const data2 = await fetch(
          "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId,body,views",
        );
        return data2.json();
      }
      default: {
        const data = await fetch(
          "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId,body,views",
        );
        return data.json();
      }
    }
  }
}

export const postsService = new PostsService();
