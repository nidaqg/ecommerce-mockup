import React from 'react'
import WelcomeWrapper from '../components/WelcomeWrapper'
import {useHistory} from 'react-router-dom';

function Home() {
    let history = useHistory()
  
    const handleOnClick = () => {
      history.push('/products')
    }


    return (
        <>
        <WelcomeWrapper
        handleOnClick= {handleOnClick}/>
        </>
    )
}

export default Home
