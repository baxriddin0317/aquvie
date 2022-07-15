import React from 'react'

// import Bg from "../Assets/img/fon3.png"
// data import
import Data from "../Assets/Data/List.json";

 
function List() {

  return (
    <section className='bg-[#F0F6F9] py-16 px-5 md:px-16 pb-36'>
        <h1 className='text-center font-bold text-4xl mb-3'>
            Magento webshop laten maken: 8 voordelen
        </h1>
        <p className='text-center font-normal text-xl mb-14'>
            Hieronder bespreken we 8 van de voornaamste redenen om voor een Magento  webshop te kiezen. 
        </p>

        {/* llist */}
        <ul className='max-w-[1123px] mx-auto flex flex-wrap justify-center md:justify-between list'>
            {Data.map(d => (
                <li className='bg-white px-10 py-8 ' key={d.id}>
                    <div className='list-span'> 
                        <span className='border-2 border-[#FF5C38] rounded-full w-11 h-11 flex items-center justify-center text-[#FF5C38] text-[28px] font-bold'>
                            {d.id}
                        </span>
                    </div>
                    <h3 className='font-bold text-2xl text[#1a1a1a] mb-2'>{d.title}</h3>
                    <p className='text-lg font-normal text-[#1a1a1a]'>{d.text}</p>
                </li>
            ))}
        </ul>
        
    </section>
  )
}

export default List