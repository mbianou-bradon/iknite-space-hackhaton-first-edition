import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from  "react-icons/bs"

export default function Footer() {
  return (
    <footer id="contact" className="">
        <div className="bg-[#0b120b] text-white md:px-28 pt-28 p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-20 gap-10 md:gap-y-52">
                <div className="w-30 h-auto">
                    <h1 className="md:text-7xl text-5xl font-extrabold pb-5 leading-snug">Get in Contact with Us</h1>
                    <p className="md:text-xl">More than 80,000+ companies trust our business.</p>
                </div>

                <div className="flex md:items-end md:justify-end mt-5 justify-center">
                    <div className="bg-white justify-between flex p-1 rounded">

                        <input type="email" id="email" placeholder="Your business email" className="border-0 md:text-xl md:px-5 px-auto italic focus:outline-none text-orange-400 min-w-0"/>

                        <div className="bg-[#fd661f] shadow-md ml-4 md:pl-4 md:pr-2 flex justify-center items-center">
                            <h3 className="md:py-3 hidden md:block">Get started</h3>

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" className="text-4xl md:hidden lg:block" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex md:justify-between md:mx-10 md:mt-32 md:items-center justify-start md:flex-row flex-col mb-10">
                <div className="text-xl font-bold p-0 m-0">
                    <h2>IMOTORS</h2>
                </div>

                <div>
                    <ul className="md:inline-flex gap-5 flex md:flex-row flex-col md:my-0 my-5">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="flex gap-5 text-xl [&>*]:cursor-pointer">
                    <div><BsFacebook /></div> {/* facebook  */}
                    <div><BsInstagram /></div> {/* instagram */}
                    <div><BsYoutube /></div> {/*Youtube*/}
                </div>
            </div>

            <div className="border-t-2 text-center h-20 flex items-center justify-center">
                <p className="text-slate-600 text-xs pt-5">Copyright &copy; 2023 Iknite Space Team Architect</p>
            </div>

        </div>

    </footer>
  )
}
