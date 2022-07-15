import React from 'react'

// images
// import Img from "../Assets/img/banner.jpg";
import Img2 from "../Assets/img/banner-2.jpg";
import Img3 from "../Assets/img/banner-3.jpg";
import Magento from "../Assets/img/magento.png";

// swipper import
import { EffectFade, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css";

function Jumbotron() {
  return (
    <div className='container'>
      {/* banner */}
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2 md:pr-9 mb-8 md:mb-0'>
            <h1 className='text-4xl md:text-5xl  mb-4 leading-[54px] md:w-4/5'>
              <span className='text-[#FF5C38] font-bold'>Magento </span>
              webshop laten maken? 
            </h1>
            <p className='font-normal text-xl md:text-2xl mb-4'>
            Wil je een Magento webshop laten maken? We zetten de voordelen van Magento op een rijtje en we bespreken welke maatwerkoplossing bij jouw bedrijf past. 
            </p>
            <img src={Magento} alt='magento' />
        </div>
        <div className='m-auto md:h-auto lg:h-full w-full md:w-1/2'>
          {/* swipper slider */}
          <JumbotronSlider />
        </div>
      </div>

      {/* jumbotron text */}
      <div className="mt-16 md:w-4/5">
        <div className='mb-9'>
          <h2 className='font-bold text-[#1a1a1a] text-2xl md:text-3xl mb-2.5'>Heb je een product of dienst dat je online wilt verkopen?</h2>
          <p className='font-normal text-[#1a1a1a] text-lg md:text-xl'>Dan is één van de eerste stappen het laten maken van een goede webshop. Bij het laten maken van een webshop heb je de keuze uit verschillende platformen. Dit is een belangrijke keuze, omdat het voor een groot deel het toekomstige succes van je webshop bepaalt. Eén van de mogelijkheden is Magento: de wereldwijde marktleider op het gebied van e-commerce – en terecht wat ons betreft! De mogelijkheden op het gebied van design, functionaliteiten en betaalmodules zijn namelijk eindeloos binnen Magento. Daarnaast is het een zeer veilig en stabiel platform.</p>
        </div>
        <div className='mb-9'>
          <h2 className='font-bold text-[#1a1a1a] text-2xl md:text-3xl mb-2.5'>Wil je een Magento webshop laten maken? </h2>
          <p className='font-normal text-[#1a1a1a] text-lg md:text-xl'>
          Schakel dan altijd de hulp in van een specialist. Het ontwerpen en goed inrichten van een Magento webshop vereist namelijk specialistische kennis. Wij weten gelukkig álles van Magento en helpen je graag met raad en daad. Hieronder bespreken we wat Magento is, wat de voordelen zijn en hoe wij van Aquive Media te werk gaan bij het bouwen van een Magento webshop. 
          </p>
        </div>
        <div className='mb-9'>
          <h2 className='font-bold text-[#1a1a1a] text-2xl md:text-3xl mb-2.5'>Wat is Magento? </h2>
          <p className='font-normal text-[#1a1a1a] text-lg md:text-xl'>
          Magento is een ‘open source’ CMS (Content Management System). Een CMS kun je het beste zien als de ‘achterkant’ van je webshop. Hierin kun je pagina’s, producten en functionaliteiten toevoegen en beheren. Magento is een open source platform wat betekent dat de broncode vrij is, waardoor je de mogelijkheid hebt binnen Magento om het design compleet af te stemmen op jouw wensen en om op maat gemaakte functionaliteiten toe te voegen.    
          </p>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron



const JumbotronSlider = () => (
  <Swiper
    slidesPerView={1}
    effect={"fade"}
    autoplay={{
      delay: 2000,
      disableOnInteraction: true,
    }}
    modules={[EffectFade, Autoplay, Pagination]}
    className="h-full"
  >
    {/* <SwiperSlide>
      <div className="relative h-full w-full ">
        <img
          className='md:h-[424px]'
          src={Img}
          alt='salom'
        />
      </div>
    </SwiperSlide> */}
    <SwiperSlide>
      <div className="relative h-full w-full ">
        <img
          className='md:h-[424px]'
          src={Img2}
          alt='salom'
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="relative h-full w-full ">
        <img
          className='md:h-[424px]'
          src={Img3}
          alt='salom'
        />
      </div>
    </SwiperSlide>
  </Swiper>
);