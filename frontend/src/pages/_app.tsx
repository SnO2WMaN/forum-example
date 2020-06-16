import { ApolloProvider } from "@apollo/react-hooks";
import clsx from "clsx";
import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

import "~/styles/tailwind.css";
import { createApolloClient } from "~/apollo/client";

export type Props = AppProps & { className?: string };

const App: React.FC<Props> = ({ Component, pageProps, className }) => {
  return (
    <ApolloProvider client={createApolloClient()}>
      <div className={clsx(className, "w-full", "min-h-screen")}>
        <Component {...pageProps} className={clsx("w-full", "min-h-screen")} />
      </div>
    </ApolloProvider>
  );
};
export const StyledApp: typeof App = styled(App)``;

export default StyledApp;
