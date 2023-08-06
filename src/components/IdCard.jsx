import React from 'react';
import '../index.css'
const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="id-card">
      <div className="left">
        <img src={picture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="right">
        <strong>First Name:</strong> {firstName} <br />
        <strong>Last Name:</strong> {lastName} <br />
        <strong>Gender:</strong> {gender} <br />
        <strong>Height:</strong> {height}m <br />
        <strong>Birth:</strong> {birth.toDateString()}
      </div>
    </div>
  );
};

export default IdCard;
