import React from 'react';
import FirstSight from './firstSight';
import Content from './content';
import CustomerReview from './customerReviews';
import Reach from './reach';
import Footer from './footer';

function Home() {
  return (
    <React.Fragment>
      <FirstSight />
      <Content />
      <CustomerReview />
      <Reach />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
