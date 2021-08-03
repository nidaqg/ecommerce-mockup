import React from 'react'


function DetailCard(props) {
    return (
        <>
       <div className="py-3 mt-5 mb-5 d-block clearfix">
    
           <img 
           style={{width: '350px'}}
           src={props.src}
           className="float-start img-fluid mx-3"
           alt={props.alt}
           /> 
           <div className="align-content-center">
               <p className="mx-3">{props.description}</p>
           </div>

           </div>
        </>
    )
}

export default DetailCard
