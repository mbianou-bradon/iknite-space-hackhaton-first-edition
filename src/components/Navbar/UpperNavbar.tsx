import React from "react";

export default function UpperNavbar() {
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
          text-lg text-gray-700
        "
      >
       <div>
          <a href="#">
            IMOTOR
          </a>
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
              font-semibold text-green-800"
          >
            <li>
              <a className="md:p-4 py-2 block" href="#"
                >Home</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block" href="#"
                >Cars</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block" href="#"
                >Contact</a>
            </li>
          </ul>

        </div>
          <div>
            <div>
              <a
                className="text-white block btn bg-green-800"
                href="#"
                >SELL</a>
            </div>
          </div>
  
    </nav>
  </header>

    </div>
  );
}