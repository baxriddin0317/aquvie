import React from 'react'
// import img
import Img from "../Assets/img/lastImg.jpg"

function LastSection() {
  return (
    <section className='pt-14 pb-40'>
        <div className='max-w-[1123px] mx-auto flex'>
            <div className='hidden md:block'>
                <img src={Img} alt="" />
            </div>
            <div className='bg-white p-10 md:w-[635px] md:-translate-x-20 md:translate-y-20'>
                <h2 className='text-3xl font-bold mb-4'>Wist je dat?</h2>
                <p className='text-xl text-[#1a1a1a]'>
                Wij van Aquive Media zelf meerdere webshops hebben gehad. Inmiddels richten we ons voor 100% op het maken en optimaliseren van Magento webshops voor onze klanten, maar de kennis die we hebben opgedaan in deze periode nemen we mee in het ontwikkelproces. Door onze jarenlange praktijkervaring weten we precies waar de kansen, maar ook de pijnpunten van een webshop liggen. Hierdoor kunnen we jouw wensen en doelstellingen goed vertalen in een Magento webshop-oplossing op maat.   
                </p>
            </div>
        </div>
    </section>
  )
}

export default LastSection