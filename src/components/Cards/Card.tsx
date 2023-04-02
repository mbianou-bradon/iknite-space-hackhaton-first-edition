import React from 'react'
import { GrLocation } from "react-icons/gr"
import { Link } from "react-router-dom"



interface Props{
  img?:string
}



export default function Card(prop:Props) {
  return (
    <div className="h-[24rem] w-[17rem] bg-white cursor-pointer hover:shadow-md">
      <Link to="/cars/:carId">
        <div>
            <div className="h-[14rem] w-full bg-gray-secondary">
              <img src={prop.img} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="cardBody flex flex-col h-[10rem] px-4 pt-3 pb-3">
              <div className="text-orange-primary mb-3 font-bold text-sm"><h2>NEGOTIABLE</h2></div>
              <div className="cardName text-2xl font-semibold">
                <h2>Name</h2>
              </div>
              <div className="flex items-baseline gap-2 my-auto">
                <h2 className="text-sm">Price</h2>
                <p className="text-xl font-bold"><span>500,000</span> FCFA</p>
              </div>
              <div>
                  <div className="flex items-center gap-1 font-bold">
                      {/* Location Icon */}
                      <div className="text-orange-primary">
                          <GrLocation />
                      </div>
                      <h2>Douala</h2>
                  </div>
              </div>
            </div>
        </div>
      </Link>
    </div>
  )
}


