import React from "react";
import { NavLink, Link } from "react-router-dom"
import logo_green from "../../assets/images/Logo_green.png"

export default function UpperNavbar() {

  const [isAuth, setIsAuth] = React.useState<boolean>(false)




  return (
    <div className="">
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          text-lg
        "
      >
       <div>
          <Link to="/">
            <img src={logo_green} alt="" className="h-5"/>
          </Link>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base
              md:flex
              md:justify-between 
              md:pt-0
              gap-8
              font-semibold text-green-primary"
          >
            <li>
              <NavLink className={({isActive})=> isActive? "border border-green-primary text-green-primary p-4 py-2": "text-green-primary font-semibold p-4 py-2"} to="/"
                >Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive? "border border-green-primary text-green-primary p-4 py-2": "text-green-primary font-semibold p-4 py-2"} to="/cars"
                >Cars</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive? "border border-green-primary text-green-primary p-4 py-2": "text-green-primary font-semibold p-4 py-2"} to="/contact"
                >Contact</NavLink>
            </li>
          </ul>

        </div>
          <div>
            <div>
              <Link
                className="text-white block btn bg-green-800"
                to={isAuth? "/addcar" : "/signup"}
                >SELL</Link>
            </div>
          </div>
  
    </nav>
  </header>

    </div>
  );
}