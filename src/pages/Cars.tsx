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
        <div className="px-10 sm:px-20 mb-[6.25rem]">
            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-[3rem]">
                <div className="filterContainer">
                    <label htmlFor="cars" className="filterLabel">CARS</label>
                    <select name="cars" id="cars" className="text-[1rem] bg-transparent inputField">
                        <option value="">ALL</option>
                        <option value="">Toyota</option>
                        <option value="">Mercedes</option>
                        <option value="">BMW</option>
                        <option value="">Peugeot</option>
                    </select>
                </div>

                <div className="filterContainer">
                    <label htmlFor="type" className="filterLabel">TYPE</label>
                    <select name="type" id="type" className="text-[1rem] bg-transparent inputField">
                        <option value="">ALL</option>
                        <option value="">Toyota</option>
                        <option value="">Mercedes</option>
                        <option value="">BMW</option>
                        <option value="">Peugeot</option>
                    </select>
                </div>

                <div className="filterContainer">
                    <label htmlFor="city" className="filterLabel">CITY</label>
                    <select name="city" id="city" className="text-[1rem] bg-transparent inputField">
                        <option value="">ALL</option>
                        <option value="">Douala</option>
                        <option value="">Yaounde</option>
                        <option value="">Baffoussam</option>
                        <option value="">Bertoua</option>
                        <option value="">Buea</option>
                        <option value="">Bamenda</option>
                        <option value="">Maroua</option>
                        <option value="">Ngaoundere</option>
                        <option value="">Garoua</option>
                        <option value="">Ebolowa</option>
                    </select>
                </div>

                <div className="filterContainer">
                    <label htmlFor="condition" className="filterLabel">CONDITION</label>
                    <select name="condition" id="condition" className="text-[1rem] bg-transparent inputField">
                        <option value="">ALL</option>
                        <option value="">New</option>
                        <option value="">Used</option>
                        <option value="">Imported</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[3rem] gap-y-[3rem]">
                {
                    cars && cars.map((car:Props) =>(
                        <Card key={car._id} name={car.name} _id={car._id} model={car.model} imageURL={car.imageURL} engineType={car.engineType} fuelType={car.fuelType} mileage={car.mileage} price={car.price} description={car.description} />
                    ))
                }
            </div>
        </div>
    )
}