import React, { FC } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
