import React from "react"
import { useEffect } from "react"
import Card from "../components/Cards/Card"
import { Props } from "../dataTypes"

export default function Cars(){

    const [cars, setCars] = React.useState([])

    useEffect(()=>{
        const fetchCars = async () => {
            const response = await fetch("/api/cars")
            const json = await response.json()

            if(response.ok){
                setCars(json)

            }
        }

        fetchCars()
    }, [])




    return(
        <div className="px-4 sm:px-20 flex items-center flex-wrap gap-5 mb-[6.25rem]">
            {
                cars && cars.map((car:Props) =>(
                    <Card key={car._id} name={car.name} _id={car._id} model={car.model} img={car.img} engineType={car.engineType} fuelType={car.fuelType} mileage={car.mileage} price={car.price} />
                ))
            }
        </div>
    )
}