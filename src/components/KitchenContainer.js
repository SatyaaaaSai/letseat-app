import React from "react";
import Kitchen from "./Kitchen";
import "../css/KitchenContainer.css";
import { useNavigate } from "react-router-dom";

const KitchenContainer = ({ kitchens, kitchensToshow }) => {
  const navigate=useNavigate();
  const handleExploreMore = ()=>{
    navigate('/kitchen');
  }
  return (
    <div className="kitchen-container">
      {kitchens.slice(0,kitchensToshow).map((kitchen) => (
        <Kitchen key={kitchen.id} kitchen={kitchen} />
      ))}
      {kitchensToshow < kitchens.length && (
        <button disabled={kitchensToshow === kitchens.length} onClick={handleExploreMore}>
          Explore Our Kitchens
        </button>
      )}
    </div>
  );
};

export default KitchenContainer;
