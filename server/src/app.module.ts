import path from "path";

import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ApiModule } from "./api/api.module";
import { TypeORMEntities } from "./typeorm/typeorm.entities";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: TypeORMEntities,
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), "src", "schema.graphql"),
    }),
    ApiModule,
  ],
})
export class AppModule {}
