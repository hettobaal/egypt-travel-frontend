import React from 'react'
import ReactDOM from 'react-dom'

function Hero() {
    ReactDOM.preload('/images/testhero.webp', { as: 'image' })
    ReactDOM.preload('/images/background.webp', { as: 'image' })

    return (
        <section className=" w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat relative  text-white sm:bg-[url('/images/background.webp')] bg-[url('/images/background.webp')]" >
        </section >
    )
}

export default Hero;
