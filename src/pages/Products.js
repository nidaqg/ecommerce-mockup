import React from 'react'
import item1 from '../assets/item1.jpg';
import item3 from '../assets/item3.jpg';
import item4 from '../assets/item4.jpg';
import Wrapper from '../components/Wrapper';
import '../assets/style.css';
import ProductCard from '../components/ProductCard';

function Products() {
    let productArray = [item1, item3, item4]

    return (
        <>
        <Wrapper>
        <div className="container-fluid">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 m-3 g-3">
            
            {productArray.map((product)=> (

            <div className="col">
             <ProductCard
             src={product}/>
            </div>
            ))
            }
            </div>
            </div>
        </Wrapper>
        </>
    )
}

export default Products
