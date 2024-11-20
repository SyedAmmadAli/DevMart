import React from 'react'
import styles from './product-info-page.module.scss'

export const ProductColorVarients = ({ colorList, onChangeColor, activeColor }) => {

    function handleColorChange(c){
        onChangeColor(c);
    }

    return (
        <>

            {colorList.map((colors, i) => <div 
            onClick={()=> handleColorChange(colors)}
            className={styles.color_box} 
            style={{ backgroundColor: colors ,border: `3px solid ${activeColor == colors ? "#000" : colors}`}}>
            </div>)}
        </>
    )
}
