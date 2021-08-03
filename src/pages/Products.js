import React from 'react'
import { useHistory } from 'react-router-dom';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/item3.jpg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.jpg';
import item6 from '../assets/item6.jpg';
import Wrapper from '../components/Wrapper';
import '../assets/style.css';
import ProductCard from '../components/ProductCard';

function Products() {
    let productArray = [item1, item2, item3, item4, item5, item6]
    let history = useHistory()

    const handleClick = () => {
        history.push('./details')
    }

    return (
        <>
        <Wrapper>
        <div className="container-fluid">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 m-5 g-5 pb-5">
            
            {productArray.map((product)=> (

            <div className="col">
             <ProductCard
             src={product}
             description={"Buy Now"}
             handleClick={handleClick}
             />
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
