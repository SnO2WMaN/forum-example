import clsx from "clsx";
import React from "react";
import styled from "styled-components";

import * as QueryType from "~/generated/graphql";

export type ComponentProps = PostProps;
export const Component: React.FC<ComponentProps> = ({
  className,
  content,
  id,
  parent,
}) => {
  return (
    <div className={clsx(className, "px-4", "py-2", "shadow", "bg-white")}>
      <div className={clsx("mb-1")}>
        <span>{id}</span>
      </div>
      <div>
        <p>{content}</p>
      </div>
      {parent && <div>&gt;&gt;{parent.id}</div>}
      <div />
    </div>
  );
};

export const StyledPage: typeof Component = styled(Component)``;

export type PostProps = Pick<QueryType.Post, "id" | "content" | "createdAt"> & {
  className?: string;

  parent?: Pick<QueryType.Post, "id">;
  children: Pick<QueryType.Post, "id">[];
};
export const Post: React.FC<PostProps> = (props) => {
  return <StyledPage {...props} />;
};
