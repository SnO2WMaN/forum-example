import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreatePostArgs } from "./dto/create.dto";
import { PostsArg } from "./dto/posts.dto";
import { Post } from "./entity/post.entity";
import { PostService } from "./post.service";

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Post)
  async post(@Args("id", { type: () => ID }) id: string): Promise<Post> {
    return this.postService.getById(id);
  }

  @Query(() => [Post])
  async posts(@Args() { offset, limit }: PostsArg): Promise<Post[]> {
    return this.postService.getMany({ skip: offset, take: limit });
  }

  @Mutation(() => Post)
  async createPost(@Args() { content, parent }: CreatePostArgs): Promise<Post> {
    const post = await this.postService.create({ content });

    if (parent) await this.postService.hang(post, parent);

    return post;
  }
}
