import React,{useState} from 'react'
import './navbar.css'
import { GiArtificialHive } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  // Function to toggle nav bar
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

 // Function to remove nav bar
  const removeNavBar = () =>{
    setActive('navBar')
  }



  
  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href="#" className="logo flex">
            <h1><GiArtificialHive className='icon'/>Deffusion model</h1>
          </a>
        </div>



        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <button className="btn">
              <a href="#">Game </a>
            </button>
          </ul>

          <div onClick={removeNavBar} className="closeNavbar">
          <IoMdClose className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon"/>
        </div>
      </header>

    </section>
  )
}

export default Navbar
