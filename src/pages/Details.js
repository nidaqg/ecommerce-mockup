import React from 'react'
import DetailCard from '../components/DetailCard'
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/item3.jpg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.jpg';
import item6 from '../assets/item6.jpg';

function Details() {
    return (
        <>
           <div className="container-fluid">

               <div className="row text-center justify-content-center">
                  <div className="col-lg-6 col-md-8 col-sm-10 align-content-center py-5">
                    <DetailCard
                    src={item1}
                    alt={"item1"}
                    description={"denim jacket, availible in small, medium and large"}
                    />
                  </div>
               </div>
               

           </div>
        </>
    )
}

export default Details
