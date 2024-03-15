import React, { useState } from 'react';
import "../css/VEG.css";

function VEG() {
    const [isVegSelected, setIsVegSelected] = useState(true); 

    const handleVegClick = () => {
        setIsVegSelected(true);
    }

    const handleNonVegClick = () => {
        setIsVegSelected(false);
    }

    return (
        <div className='sec'>
            <div className='box'>
                <div className='shift'>
                    <button className={`btn-shift ${isVegSelected ? 'selected' : ''}`} onClick={handleVegClick}>Veg</button>
                    <button className={`btn-shift ${!isVegSelected ? 'selectedN' : ''}`} onClick={handleNonVegClick}>NonVeg</button>
                </div>
                {isVegSelected ? (
                    <div className='choose one'>
                        <div className='image img1'></div>
                        <h3>VEG</h3>
                        <h4>Muddapappu Avakai</h4>
                        <button className='show'>Click Here</button>
                    </div>
                ) : (
                    <div className='choose two'>
                        <div className='image img2'></div>
                        <h3>NON-VEG</h3>
                        <h4>Chicken Dum Biryani</h4>
                        <button className='show'>Click Here</button>
                    </div>
                )}
            </div>
            <div className='content'>
                <div className='matter high'><h4 className='align'>Today Specials</h4> <div className='simage i1'></div></div>
                <div className='matter'><h4 className='align'>Noodels</h4> <div className='simage i2'></div></div>
                <div className='matter'><h4 className='align'>Milk Shakes</h4><div className='simage i3'></div></div>
                <div className='matter'><h4 className='align'>Chicken Roll </h4><div className='simage i4'></div></div>
            </div>
        </div>
    );
}

export default VEG;
