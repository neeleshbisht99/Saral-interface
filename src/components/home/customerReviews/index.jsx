import React, { useState } from 'react';
import Carousel from './carousel';
import './index.css';
import Reviews from './reviews';

function CustomerReview() {
  const [reviews, setReviews] = useState([
    {
      imageUrl: 'https://www.dropbox.com/s/crw3g63033njzjv/ashish.jpeg?raw=1',
      name: 'Ash',
      message:
        'Saral, as it says itself, clean and simple. In love with this app since last 3 days.',
    },
    {
      imageUrl: 'https://www.dropbox.com/s/sq19d6igo6lyyx7/aman.jpeg?raw=1',
      name: 'Aman',
      message:
        'Definitely quite exciting, and would surely pave a new way to clean the world. ',
    },
    {
      imageUrl: 'https://www.dropbox.com/s/6d8j41gfdae8b7x/shubh.jpeg?raw=1',
      name: 'Surbhi',
      message:
        'This application does pretty good job, I use it nearly everday.',
    },
    {
      imageUrl: 'https://www.dropbox.com/s/z9l16h5mdlz8it8/nikita.jpeg?raw=1',
      name: 'Nick',
      message:
        'It gives me a sense of satisfaction & containment, everytime I do my tiny part.',
    },
    {
      imageUrl: 'https://www.dropbox.com/s/q5uyvmzfre5lwim/gaurav.jpeg?raw=1',
      name: 'Gauri',
      message:
        ' Surely a prefect blend of engineering and design to solve environmental problems',
    },
    {
      imageUrl: 'https://www.dropbox.com/s/rvtpcwc0eqxcrmg/niraj.jpg?raw=1',
      name: 'Bheem',
      message:
        'It is fantastic. One of the greatest innovations ever in the history.',
    },
    {
      imageUrl: 'https://www.dropbox.com/s/sq19d6igo6lyyx7/aman.jpeg?raw=1',
      name: 'Amma',
      message:
        'This app fill the gap between me and my responsibility towards mother earth.',
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
