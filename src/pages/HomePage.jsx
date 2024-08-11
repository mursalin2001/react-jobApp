import React from 'react'
import Hero from '../components/Hero.jsx'
import CardComponent from '../components/CardComponent'
import Joblistings from '../components/Joblistings'
import ViewAlljobs from '../components/ViewAlljobs'
const HomePage = () => {
    return (
        <>
            <Hero hText="Become a React Dev" pText="Find the react job that fits your skill set" />
            <CardComponent />
            <Joblistings isHome= 'true'/>
            <ViewAlljobs />

        </>
    )
}

export default HomePage