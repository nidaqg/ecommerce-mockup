import React from 'react'

function ProductCard(props) {
    return (
        <>
            <div className="card localCard">
                 <img
                 src={props.src}
                 className="img-fluid hoverCard"
                 alt="product"
                 />
             </div>
        </>
    )
}

export default ProductCard
