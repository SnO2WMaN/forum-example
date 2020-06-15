import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Post } from "./entity/post.entity";
import { PostResolver } from "./post.resolver";
import { PostService } from "./post.service";

@Module({
  providers: [PostService, PostResolver],
  imports: [TypeOrmModule.forFeature([Post])],
  exports: [PostService, PostResolver, TypeOrmModule.forFeature([Post])],
})
export class PostModule {}
