import clsx from "clsx";
import React from "react";
import styled from "styled-components";

import { Post } from "./Post";

import * as QueryType from "~/generated/graphql";

export type ComponentProps = TimelineProps;
export const Component: React.FC<ComponentProps> = ({ className, posts }) => {
  return (
    <div className={clsx(className, "space-y-4")}>
      {posts.map(({ id, ...props }) => (
        <Post id={id} {...props} key={id} />
      ))}
    </div>
  );
};
export const StyledPage: typeof Component = styled(Component)``;

export type TimelineProps = {
  className?: string;

  posts: QueryType.GetPostsQuery["posts"];
};
export const Timeline: React.FC<TimelineProps> = (props) => {
  return <StyledPage {...props} />;
};
