import React, { Children } from 'react';

import '@styles/components/PrincipalCard.css';

const PrincipalCard = ({ children }) => (
  <div className="card-item">{children}</div>
);

export default PrincipalCard;
