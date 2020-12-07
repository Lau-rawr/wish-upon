import React, {useEffect, useContext} from "react";

export default function ColorPalette(props) {
    
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink',	
     '#66FF66','#FF9966','#50BFE6','#ac1db8','#0bf9ea','#ff08e8']

    return(
        <>
        
        <img id="backgroundPalette"  />
       
        {/* <img src={require('./images/mickeyPalette.png')} /> */}
        <div className="color-palette" >
            {colors.map(color => { 
                const activeClass = props.currentColor === color ? 'color-swatch-active' : '';
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
        </>
        
    )
}