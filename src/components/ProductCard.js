import React from 'react'

function ProductCard(props) {
    return (
        <>
            <div 
            className="card localCard" 
            style={{backgroundImage:`url(${props.src})`}}
            onClick={props.handleClick}
            >
                 <div className="card hoverCard text-center">{props.description}</div>
             </div>
        </>
    )
}

export default ProductCard
