import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";

import { Post } from "./entity/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getById(id: string): Promise<Post> {
    return this.postRepository.findOneOrFail(id, {
      relations: ["parents", "children"],
    });
  }

  async getMany(
    option?: Pick<FindManyOptions, "skip" | "take">,
  ): Promise<Post[]> {
    return this.postRepository.find({
      ...option,
      relations: ["parents", "children"],
    });
  }

  async create({ content }: Required<Pick<Post, "content">>): Promise<Post> {
    const post = await this.postRepository.create({ content });

    await this.postRepository.save(post);
    return post;
  }

  async hang(child: string | Post, parent: string | Post): Promise<void> {
    const childPost =
      typeof child === "string" ? await this.getById(child) : child;
    const parentPost =
      typeof parent === "string" ? await this.getById(parent) : parent;

    await this.postRepository
      .createQueryBuilder()
      .relation("parents")
      .of(childPost)
      .add(parentPost);
  }
}
