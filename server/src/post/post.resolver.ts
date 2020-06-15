import { Args, ID, Query, Resolver } from "@nestjs/graphql";

import { Post } from "./entity/post.entity";
import { PostService } from "./post.service";

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Post)
  async post(@Args("id", { type: () => ID }) id: string): Promise<Post> {
    return this.postService.getById(id);
  }
}
