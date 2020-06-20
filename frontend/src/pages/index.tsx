import { useQuery } from "@apollo/react-hooks";
import clsx from "clsx";
import React from "react";
import styled from "styled-components";

import { Form } from "~/components/form/Form";
import { Timeline } from "~/components/timeline/Timeline";
import * as QueryType from "~/generated/graphql";
import { getPosts } from "~/queries/getPosts";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Page: React.FC<Props> = ({ className }) => {
  const { loading, data } = useQuery<
    QueryType.GetPostsQuery,
    QueryType.GetPostsQueryVariables
  >(getPosts);

  return (
    <main
      className={clsx(
        className,
        "bg-gray-100",
        "flex",
        "justify-center",
        "items-center",
      )}
    >
      {!loading && (
        <Timeline posts={data.posts} className={clsx("mr-4", "w-64")} />
      )}
      <Form />
    </main>
  );
};
export const StyledPage: typeof Page = styled(Page)``;

export default StyledPage;
