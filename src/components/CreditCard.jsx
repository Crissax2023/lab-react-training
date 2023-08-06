import React from 'react';
import '../index.css'

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  const lastFourDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardLogo = type === 'Visa' ? '/visa.png' : '/master-card.svg';

  return (
    <div className="credit-card" style={cardStyle}>
      <img className="card-logo" src={cardLogo} alt={type} />
      <p className="card-number">•••• •••• •••• {lastFourDigits}</p>
      <div className="card-info">
       
        <p className="card-info-expiry">
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p className="card-info-bank">{bank}</p>
        <p className="card-info-owner">{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
