import React from 'react'
import { GoLocation } from "react-icons/go"
import { BsSpeedometer2 } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Props } from '../../dataTypes'





export default function Card(prop:Props) {

  const carId = prop._id

  return (
    <div className="h-[24rem] w-[17rem] bg-white cursor-pointer hover:shadow-md">
      <Link to={"/cars/" + carId} state={prop}>
        <div>
            <div className="h-[14rem] w-full bg-gray-secondary">
              <img src={prop.imageURL} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="cardBody flex flex-col h-[10rem] px-4 pt-3 pb-3">
              <div className="text-orange-primary mb-3 font-bold text-sm"><h2>NEGOTIABLE</h2></div>
              <div className="cardName text-2xl font-semibold">
                <h2>{prop.name}</h2>
              </div>
              <div className="flex items-baseline gap-2 my-auto">
                <h2 className="text-sm">Price</h2>
                <p className="text-xl font-bold text-orange-primary"><span className="">{prop.price}</span>FCFA</p>
              </div>
              <div className="flex justify-between">
                  <div className="flex items-baseline gap-1 font-bold text-xs">
                      {/* Location Icon */}
                      <div className="text-orange-primary">
                          <GoLocation/>
                      </div>
                      <h2>Douala</h2>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-xs">
                    {/* Mileage Icon */}
                    <div>
                      <BsSpeedometer2 color="#FD661F"/>
                    </div>
                    <h2>{prop.mileage} km/h</h2>
                  </div>
              </div>
            </div>
        </div>
      </Link>
    </div>
  )
}


