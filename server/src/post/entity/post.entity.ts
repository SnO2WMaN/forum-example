import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
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

  @Field(() => [Post])
  @ManyToMany(() => Post, (post) => post.children)
  @JoinTable()
  parents?: Post[];

  @Field(() => [Post])
  @ManyToMany(() => Post, (post) => post.parents)
  children?: Post[];
}
