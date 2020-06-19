import { Module } from "@nestjs/common";

// eslint-disable-next-line import/no-unresolved
import { PostModule } from "src/post/post.module";

@Module({
  imports: [PostModule],
})
export class ApiModule {}
