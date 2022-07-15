import React from 'react'
import Img from "../Assets/img/contact.jpg"

// import icons
import {GoMail} from "react-icons/go";
import {MdOutlineCall} from "react-icons/md"

function Contact() {
  return (
    <section className='bg-[#FF5C38] md:bg-section-img bg-no-repeat bg-[left_top_5rem] py-28'>
        <div className="max-w-[1123px] mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className='w-full flex justify-center px-3 md:px-0 mb-5 md:mb-0'>
              <img className='' src={Img} alt="" />
            </div>
            <div className='text-white md:ml-12 md:px-0 px-3 text-center md:text-left'>
              <h2 className='font-bold text-4xl mb-6'>
              Vragen over Magento?
              </h2>
              <p className='font-normal text-xl mb-6'>
              Meer vragen over de mogelijkheden van Magento of wil je een Magento webshop laten maken? Lees hieronder verder of neem gerust contact met ons op. We helpen je graag verder! 
              </p>
              <div className='flex items-center flex-col md:flex-row'>
                <button className='border border-white md:mr-2 rounded-full px-10 py-3 flex items-center justify-center'>
                  <MdOutlineCall className='text-xl mr-1' />
                  <span>Bel ons</span>
                </button>
                <button className='border border-white rounded-full px-10 py-3 md:full flex justify-center mt-4 md:mt-0 items-center '>
                  <GoMail className='text-xl mr-1' />
                  Mail ons
                </button>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact