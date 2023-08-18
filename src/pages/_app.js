import React from 'react';
import '../styles/global-styles.scss';


// import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }) {
  return (
    // <ApolloProvider>
    <Component {...pageProps} />
    // </ApolloProvider>
  );
}
