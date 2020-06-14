import classnames from "clsx";
import React from "react";
import styled from "styled-components";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Page: React.FC<Props> = ({ className }) => {
  return <main className={classnames(className, "bg-gray-700")} />;
};
export const StyledPage: typeof Page = styled(Page)``;

export default StyledPage;
