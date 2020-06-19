import { ArgsType } from "@nestjs/graphql";

import { PaginationArgs } from "src/common/dto/pagenation.dto";

@ArgsType()
export class PostsArg extends PaginationArgs {}
