import classnames from "clsx";
import React from "react";
import styled from "styled-components";

import { Form } from "~/components/form/Form";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Page: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={classnames(
        className,
        "bg-gray-100",
        "flex",
        "justify-center",
        "items-center",
      )}
    >
      <Form />
    </main>
  );
};
export const StyledPage: typeof Page = styled(Page)``;

export default StyledPage;
