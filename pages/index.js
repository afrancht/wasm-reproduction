/*
 * HomePage
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { LandingPage } from '../components';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>Privasee</title>
          <meta name="description" content="Home page" />
        </Helmet>
        <LandingPage />
      </>
    );
  }
}
