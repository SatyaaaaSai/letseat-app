
import React from 'react';
import { KITCHEN_LOGO } from '../utils/Constants';
const Kitchen = (props) => {
  const {kitchen}=props;
const {name,opname,address,rating,cuisines}=kitchen;
  return (
    <div className="kitchen-component">
        <div className="kitchen-image-container">
          <img src={KITCHEN_LOGO} alt="kitchen-phot" className="kitchen-image"/>
        </div>
        <div className="kitchen-details-container">
          <h2>{name} Kitchen</h2>
          <h3>Operated By:{opname}</h3>
          <h4>{address} • {rating}⭐</h4>
          <h5>Cuisines:<span>{cuisines}</span></h5>
        </div>
    </div>
  )
}

export default Kitchen
