import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../Assets/img/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// header component
function Header() {
  const [ btn, setBtn ] = useState(true);


  // hymbergur btn onclick event
  const handleBtn = () => {
    setBtn(!btn);
  }

  return (
    <header className="py-4 md:py-5 px-4 md:px-7 lg:px-9 md:px-11 mb-5" >
 
      <div className='flex justify-between items-center'>
        {/* logo */}
        <Link to="/" >
          <img src={Logo} alt="logo" />
        </Link>

        {/* nav */}
        <nav className='hidden md:block'>
          <ul className='flex'>
            <li className='menu__item'> 
              <Link to="#" className='text-lg' >Wat we doen</Link> 
            </li>
            <li className='menu__item'> 
              <Link to="#" className='text-lg' >Cases</Link> 
            </li>
            <li className='menu__item'> 
              <Link to="#"  className='text-lg' >Ons verhaal</Link> 
            </li>
            <li className='menu__item'> 
              <Link to="#" className='text-lg' >Blog</Link> 
            </li>
            <li className='menu__item '> 
              <Link to="#" className='text-lg' >Contact</Link> 
            </li>
          </ul>
        </nav>

        {/* humburger button */}
        <button className='flex items-center justify-center md:hidden' onClick={handleBtn}>
          {btn ? <AiOutlineMenu className='text-2xl' />
            : <AiOutlineClose className="text-2xl" />}
        </button>
      </div>

      {/* mobile menu */}
      <nav className={`bg-white fixed z-50 top-0 w-4/5 py-5 px-9 h-full duration-700 ${btn ? "-left-full" : "left-0"}`}>

        {/* logo */}
        <Link to="/" >
          <img src={Logo} alt="logo" />
        </Link>

        <ul className='flex flex-col items-center mt-20'>
          <li className='mb-7' onClick={handleBtn}> 
            <Link to="#" className='text-lg' >Wat we doen</Link> 
          </li>
          <li className='mb-7' onClick={handleBtn}> 
            <Link to="#" className='text-lg' >Cases</Link> 
          </li>
          <li className='mb-7' onClick={handleBtn}> 
            <Link to="#"  className='text-lg' >Ons verhaal</Link> 
          </li>
          <li className='mb-7'  onClick={handleBtn}> 
            <Link to="#" className='text-lg' >Blog</Link> 
          </li>
          <li onClick={handleBtn}> 
            <Link to="#" className='text-lg' >Contact</Link> 
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header