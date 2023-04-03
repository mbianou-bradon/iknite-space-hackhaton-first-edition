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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2rem] gap-y-[3.125rem] px-10 sm:px-20 mb-[6.25rem]">
            {
                cars && cars.map((car:Props) =>(
                    <Card key={car._id} name={car.name} _id={car._id} model={car.model} imageURL={car.imageURL} engineType={car.engineType} fuelType={car.fuelType} mileage={car.mileage} price={car.price} description={car.description} />
                ))
            }
        </div>
    )
}