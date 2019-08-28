/*
 * Root app page that loads the store and the pages given by next.js
 */

import App, { Container } from 'next/app';
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import withReduxStore from '../utils/with-redux-store';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Helmet>
          <title>Privasee</title>
          <meta name="description" content="Dashboard Page" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Helmet>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
