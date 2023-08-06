import React from 'react';

const Rating = (props) => {
  const { children } = props;

  const filledStars = Math.round(children); // Round the number to get the filled stars
  const emptyStars = 5 - filledStars; // Calculate the empty stars

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push('★');
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push('☆');
  }

  return <div className="rating">{stars.join('')}</div>;
};

export default Rating;
