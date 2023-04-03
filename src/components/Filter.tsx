import React from "react"
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Filter(){

    const [isAuth, setIsAuth] = React.useState<boolean>(false)

    return(

        <div className="sm:h-[50vh] px-10 sm:px-20 mb-[6.25rem]">
            <div className="bg-orange-secondary w-full h-full flex flex-col justify-around px-8 py-4">

                <div className="flex items-center justify-between flex-wrap gap-y-5">
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
                <div className="flex items-center justify-between flex-wrap gap-y-3">
                    <div className="w-[70%]">

                    </div>

                    <div className="btn text-white flex items-center gap-1 bg-green-primary">
                        <div>
                            <BsSearch />
                        </div>
                        <h2>Search</h2>
                    </div>

                    <Link to={isAuth? "/addcar":"/signup"}>
                        <div className="btn border hover:bg-orange-primary text-white">
                            <h2>Sell your Car</h2>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}