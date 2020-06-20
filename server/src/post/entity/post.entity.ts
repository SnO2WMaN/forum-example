import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from "typeorm";

@ObjectType()
@Entity()
@Tree("nested-set")
export class Post {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  content: string;

  @Field(() => Date)
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field({ nullable: true })
  @TreeParent()
  parent: Post;

  @TreeChildren()
  children: Post[];
}
