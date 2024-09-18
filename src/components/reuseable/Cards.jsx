import React from 'react'
import Image from 'next/image'

function Cards({ cards }) {

    return (
        <section className='grid min-[1200px]:grid-cols-4 sm:grid-cols-2 grid-cols-1  grid-rows-1 my-8 gap-4 items-center'>
            {
                cards.map((item, index) => {
                    return (
                        <div key={index} className='bg-white cursor-pointer  border-l-4 border-blue    dark:bg-darkMode flex-grow w-full p-6 rounded-lg shadow-lg'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='text-[#808191] dark:text-darkModeText font-roboto font-normal	 text-sm'>{item.title}</h3>
                                    <h1 className='text-black dark:text-white text-xl  font-bold'>{item.total}</h1>
                                </div>
                                <div className='h-16 w-16 rounded-md bg-[#edf4ff] items-center flex justify-center'>
                                    <Image src={item.icon} width={55} height={55} alt='icon' />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )
}

export default Cards;