import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Post } from "./entity/post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async getById(id: string): Promise<Post> {
    return this.postRepository.findOneOrFail(id);
  }
}
