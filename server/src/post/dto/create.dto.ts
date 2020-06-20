import { ArgsType, Field, ID } from "@nestjs/graphql";

@ArgsType()
export class CreatePostArgs {
  @Field()
  content: string;

  @Field(() => ID, { nullable: true })
  parent?: string;
}
