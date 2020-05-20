import React, { useState } from 'react';
import Carousel from './carousel';
import './index.css';
import Reviews from './reviews';

function CustomerReview() {
  const [reviews, setReviews] = useState([
    {
      imageUrl: require('../../../img/users/ashish.jpeg'),
      name: 'Ash',
      message:
        'It is fantastic. One of the greatest innovations ever in the history.',
    },
    {
      imageUrl: require('../../../img/users/aman.jpeg'),
      name: 'Aman',
      message:
        'It is fantastic. One of the greatest innovations ever in the history, world has ever seen.',
    },
    {
      imageUrl: require('../../../img/users/shubh.jpeg'),
      name: 'Surbhi',
      message:
        'It is fantastic. One of the greatest innovations ever in the history.',
    },
    {
      imageUrl: require('../../../img/users/nikita.jpeg'),
      name: 'Nick',
      message:
        'It is fantastic. One of the greatest innovations ever in the history, world has ever seen.',
    },
    {
      imageUrl: require('../../../img/users/gaurav.jpeg'),
      name: 'Gauri',
      message:
        'It is fantastic. One of the greatest innovations ever in the history.',
    },
    {
      imageUrl: require('../../../img/users/aman.jpeg'),
      name: 'Amma',
      message:
        'It is fantastic. One of the greatest innovations ever in the history, world has ever seen.',
    },
    {
      imageUrl: require('../../../img/users/niraj.jpg'),
      name: 'Bheem',
      message:
        'It is fantastic. One of the greatest innovations ever in the history.',
    },
  ]);

  const setting = {
    dragSpeed: 1.25,
    itemWidth: 380,
    itemHeight: 150,
    itemSideOffsets: 15,
  };

  return (
    <React.Fragment>
      <div className="customerReviewContainer">
        <div className="loveSaral">PEOPLE LOVE SARAL</div>
        {/* <div className="carouselContainer"> */}
        <Carousel _data={reviews} {...setting}>
          <Reviews reviews={reviews} />
        </Carousel>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}

export default CustomerReview;
