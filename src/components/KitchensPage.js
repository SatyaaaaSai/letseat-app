import React from 'react'
import { kitchens } from "../utils/mockData";
import KitchenContainer from './KitchenContainer';
const KitchensPage = () => {
  return (
    <div>
        <h2>All Kitchens</h2>
        <KitchenContainer kitchens={kitchens} />
    </div>
  )
}

export default KitchensPage