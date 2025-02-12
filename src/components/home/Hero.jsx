import React from 'react'
import ReactDOM from 'react-dom'

function Hero() {
    ReactDOM.preload('/images/heroNew.webp', { as: 'image' })
    ReactDOM.preload('/images/heroNew.jpg', { as: 'image' })

    return (
        <section className=" w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat relative  text-white sm:bg-[url('/images/heroNew.jpg')] bg-[url('/images/heroNew.jpg')]" >
        </section >
    )
}

export default Hero;
