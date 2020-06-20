import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, TreeRepository } from "typeorm";

import { Post } from "./entity/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: TreeRepository<Post>,
  ) {}

  async getById(id: string): Promise<Post> {
    return this.postRepository.findOneOrFail(id, {
      relations: ["parent", "children"],
    });
  }

  async getMany(
    option?: Pick<FindManyOptions, "skip" | "take">,
  ): Promise<Post[]> {
    return this.postRepository.find({
      ...option,
      relations: ["parent", "children"],
      order: { createdAt: "DESC", id: "ASC" },
    });
  }

  async create({ content }: Required<Pick<Post, "content">>): Promise<Post> {
    const post = await this.postRepository.create({ content });

    await this.postRepository.save(post);
    return post;
  }

  async hang(child: string | Post, parent: string | Post): Promise<void> {
    const childPost =
      typeof child === "string"
        ? await this.postRepository.findOneOrFail(child)
        : child;
    const parentPost =
      typeof parent === "string"
        ? await this.postRepository.findOneOrFail(parent, {
            relations: ["children"],
          })
        : parent;

    parentPost.children.push(childPost);
    await this.postRepository.save(parentPost);
  }
}
