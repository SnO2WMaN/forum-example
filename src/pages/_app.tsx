import classnames from "clsx";
import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };

const App: React.FC<Props> = ({ Component, pageProps, className }) => {
  return (
    <div className={classnames(className)}>
      <Component {...pageProps} />
    </div>
  );
};
export const StyledApp: typeof App = styled(App)``;

export default StyledApp;
