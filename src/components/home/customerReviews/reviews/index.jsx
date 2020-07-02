import React, { useState, useEffect } from 'react';
import './index.css';

function Reviews(props) {
  const { reviews } = props;

  const setting = {
    dragSpeed: 1.25,
    itemWidth: 380,
    itemHeight: 280,
    itemSideOffsets: 15,
  };
  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };

  return (
    <React.Fragment>
      {reviews.map((review, _i) => (
        <div key={_i} className="item" style={{ ...itemStyle }}>
          <div className="reviewImageContainer">
            <img src={review.imageUrl} className="reviewerImg" />
          </div>
          <div className="reviewContentContainer">
            <div className="reviewContenthead">
              <p className="reviewerName">{review.name}</p>
            </div>
            <div className="reviewContentMsg">
              <p className="reviewerMsg">{review.message}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
export default Reviews;
