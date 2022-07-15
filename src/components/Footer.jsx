import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Assets/img/lightLogo.png"

function Footer() {
  return (
    <footer className='bg-[#1a1a1a] py-5 text-white'>
        <div className="container py-14 grid sm:grid-cols-2 md:grid-cols-4">
            <ul className='mx-auto text-center md:mx-0 md:text-left mb-4 md:mb-0'>
                <li>
                    <h3 className='font-bold text-lg mb-5'>
                        title 1
                    </h3>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                        Hier komt een link
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/">
                        Hier komt een link
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                        Hier komt een link
                    </Link>
                </li>
            </ul>
            <ul className='mb-4 md:mb-0 mx-auto text-center md:mx-0 md:text-left'>
                <li>
                    <h3 className='font-bold text-lg mb-5'>
                        title 2
                    </h3>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                        Hier komt een link
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/">
                        Hier komt een link
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                        Hier komt een link
                    </Link>
                </li>
            </ul>
            <ul className='mb-4 md:mb-0 mx-auto text-center md:mx-0 md:text-left'>
                <li>
                    <h3 className='font-bold text-lg mb-5'>
                        title 3
                    </h3>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                        Hier komt een link
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/">
                        Hier komt een link
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                        Hier komt een link
                    </Link>
                </li>
            </ul>
            <ul className='mb-4 md:mb-0 mx-auto text-center md:mx-0 md:text-left'>
                <li className='mb-5'>
                    <img src={Logo} className="mx-auto md:mx-0" alt="" />
                </li>
                <li className='text-base mb-4'>
                    Peizerweg 97, 9727 AJ Groningen
                </li>
                <li className='text-base mb-4'>
                    <Link to="/">
                    info@aquive.nl
                    </Link>
                </li>
                <li className='text-base mb-4'>
                    <Link to="/" >
                    050 737 01 52
                    </Link>
                </li>
            </ul>
            
        </div>
        <p className='text-center text-[13px]'>© 2020 Aquive Media   |   Algemene voorwaarden   |   Privacy</p>
    </footer>
  )
}

export default Footer