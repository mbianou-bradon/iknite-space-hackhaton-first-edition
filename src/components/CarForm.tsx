import React from "react"
import { ImageIcon} from "../assets/icons/icons"

export default function CarForm(){


    return (
        <section className="bg-[#f1f6ed] py-8 px-4 sm:px-8 md:px-16 2xl:px-32 my-16 w-full [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">

        <h1 className="text-2xl md:text-4xl text-slate-800 font-bold">Sell your Car online</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 my-8">
            <div className="w-full flex flex-col [&>*]:max-w-2xl [&>*]:h-fit gap-8">
                <div className="relative add-photos flex flex-col justify-center items-center rounded-md shadow-inner px-4 py-8 border-2 border-dashed bg-slate-50 hover:bg-slate-100 cursor-pointer">
                    <label htmlFor="photos" className="block absolute top-0 left-0 w-full h-full"></label>
                    <input type="file" name="add-photos" id="photos" accept="image/*, video/*" className="absolute hidden"/>
                    <span className="text-2xl block p-4 rounded-full bg-slate-200 text-emerald-800">
                        <ImageIcon/>
                    </span>
                    <span className="text-xl text-slate-600 font-medium block pt-4">Add Photos</span>
                </div>
    
                <div className="carName">
                    <input type="text" id="carName" className="carName py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400" placeholder="Car Name" />
                </div>

                <div className="carModel">
                    <input type="text" id="model" className="carModel py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400" placeholder="Car Model" />
                </div>
    
                <div className="price flex items-center bg-gray-300 rounded-md">
                    <input type="number" id="price" className="price py-2 px-4 min-w-0 border w-full rounded-l-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400" placeholder="Price" />
                    <div className="bg-gray-300 h-full w-[15%] flex items-center justify-center font-bold text-slate-500 rounded-r-md"><h2>FCFA</h2></div>
                </div>

                <div className="mileage flex items-center bg-gray-300 rounded-md">
                    <input type="number" id="mileage" className="price py-2 px-4 min-w-0 border w-full rounded-l-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400" placeholder="Mileage" />
                    <div className="bg-gray-300 h-full w-[15%] flex items-center justify-center font-bold text-slate-500 rounded-r-md"><h2>KM/hr</h2></div>
                </div>
            </div>
            <div className="w-full flex flex-col [&>*]:max-w-2xl [&>*]:h-fit gap-8">
                <div>
                    {/* <label htmlFor="fuelType">Fuel Type</label> */}
                    <select  id="category" className="category py-2 px-4 mt-2 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
                        <option value="" className="font-slate-300">Fuel Type</option>
                        <option value="diesel">Diesel</option>
                        <option value="petrol">Petrol</option>
                        <option value="gas">Gas</option>
                    </select>
                </div>

                <div>
                    {/* <label htmlFor="engineType">Engine Type</label> */}
                    <select id="engineType" className="form-input category py-2 px-4 mt-2 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
                        <option value="">Engine Type</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                    </select>
                </div>

                {/* <select id="category" className="form-input category py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
                    <option value="">Availability</option>
                    <option value="1">One Item</option>
                    <option value="2">In Stock</option>
    </select> */}
                <textarea name="description" id="desc" cols={30} rows={5} className="form-input py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 resize-none" placeholder="Write description here ..."></textarea> 
            </div>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-start md:justify-end text-slate-800 font-medium gap-4 py-4">
            <button className="py-2 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 text-white font-bold transition-all duration-200 ease-linear drop-shadow-lg">Add Car</button>
            <button className="py-2 px-4 rounded-md bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 text-white font-bold transition-all duration-200 ease-linear drop-shadow-lg">Discard changes</button>
        </div>

    </section>
    )
}