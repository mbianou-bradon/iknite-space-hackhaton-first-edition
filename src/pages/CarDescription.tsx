import { GrLocation } from "react-icons/gr"
import { BiChevronDown, BiChevronUp, BiChevronLeft } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
import React from "react"
import { Link, useParams } from "react-router-dom"
import { Props } from "../dataTypes"

export default function CarDescription(){
    const [car, setCar] = React.useState<Props>({
        _id: "",
        name: "",
        model: "",
        img:"",
        engineType: "",
        fuelType: "",
        mileage: "",
        price: ""
    })
    const [isMakingOffer, setIsMakingOffer] = React.useState<boolean>(false)
    const [isAuth, setIsAuth] = React.useState<boolean>(false)

    const openIsMakingOffer = () =>{
        setIsMakingOffer(true)
    }
    const closeIsMakingOffer = () => {
        setIsMakingOffer(false)
    }

    const carId = useParams()["carId"]

    console.log(carId)

    React.useEffect(()=>{
        const fetchCar = async () => {
            const url = "/api/cars/" + carId
            const response = await fetch(url)
            const json = await response.json()

            if(response.ok){
                setCar(json)
                console.log(json)
            }
        }

        fetchCar()
    }, [])

    return(
        <div className="px-20">
            <div>
                <header className="mt-2 mb-[6.25rem]">
                    <div className="flex items-center gap-4">
                        <Link to="/cars">
                            <div className="w-fit flex items-center justify-center border border-slate-950 pl-2 pr-4 py-1 hover:bg-slate-950 hover:text-white cursor-pointer">
                                <div className="text-2xl">
                                    <BiChevronLeft/>
                                </div>
                                <h2 className="text-sm">Return Back</h2>
                            </div>
                        </Link>

                        <div className="font-serif">
                            <h2>Home/Cars/<span>{car.name}</span></h2>
                        </div>
                    </div>

                    <div className="my-5">
                        <h2 className="text-4xl font-semibold mb-2">{car.name}</h2>
                        <div className="flex items-center gap-1">
                            {/* Location Icon */}
                            <div className="text-orange-primary">
                                <GrLocation />
                            </div>
                            <h2>Douala</h2>
                        </div>
                    </div>
                </header>

                <main className="grid grid-cols-3">
                    <div className="col-span-2 w-[90%]">
                        <div className="grid grid-cols-4 w-fit gap-7">
                            <div className="col-span-3 bg-rose-600 h-[32.8125rem] w-[30.25rem] rounded">
                                <img src="" alt="" />
                            </div>

                            <div className="flex flex-col items-center justify-between">
                                <div className="text-3xl cursor-pointer">
                                    <BiChevronUp />
                                </div>
                                <div className="flex flex-col gap-5 [&>*]:w-[9.375rem] [&>*]:h-[7.8125rem] [&>*]:bg-rose-500 [&>*]:rounded">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="text-3xl cursor-pointer">
                                    <BiChevronDown />
                                </div>
                            </div>
                        </div>

                        {/* Car Details: Engine Type, Fuel Type, Model Mileage */}
                        <div className="bg-slate-50 py-5 px-8 my-[6.25rem]">
                            <div className="flex items-center gap-1 text-xs my-4 mb-5 text-slate-500">
                                <div className="text-lg ">
                                    <AiOutlineEye />
                                </div>
                                <p><span>4</span> buyers have viewed this car in the last <span>24</span> hours</p>
                            </div>

                            <div>
                                <div>
                                <p className="text-slate-500 font-semibold my-5">About: <span className="text-2xl font-semibold text-slate-900">{car.name}</span></p>
                                </div>
                                <div className="[&>*]:mb-3 [&>*]:grid [&>*]:grid-cols-3 [&>*>p]:text-slate-500 [&>*>h2]:text-slate-500 [&>*>h2]:font-semibold">
                                    <div>
                                        <p>Engine Type:</p> <h2>{car.engineType}</h2>
                                    </div>
                                    <div>
                                        <p>Model: </p> <h2>{car.model}</h2>
                                    </div>
                                    <div>
                                        <p>Fuel Type: </p> <h2>{car.fuelType}</h2>
                                    </div>
                                    <div>
                                        <p>Mileage: </p> <h2>{car.mileage}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seller Entra Comments */}
                        <div className="bg-slate-50 py-5 px-8 mb-[6.25rem]">
                            <div className="flex items-center gap-1 mb-5 text-2xl font-semibold">
            
                                <h2>Seller Comment</h2>
                            </div>
                            <p className="text-xs w-[30%] leading-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at dolore nihil, reprehenderit quod minus dolores ducimus iusto aperiam ipsum, est quae autem deserunt eum quis odio, blanditiis neque quibusdam.
                            </p>
                        </div>
                    </div>
                    
                    {/* Side Bar */}
                    <div className="">
                        <div className="h-[44rem] p-8 bg-green-primary">
                            <div className="my-8">
                                <h2 className="text-3xl font-bold text-orange-primary">FCFA <span>{car.price}</span></h2>
                                <div className="my-5">
                                    <div className="flex items-center justify-between font-semibold mb-3">
                                        <h2>Convey Currency</h2>
                                        <div className="text-2xl pt-1">
                                            <BiChevronUp />
                                        </div>
                                    </div>
                                    <div className="font-semibold">USD <span>450</span></div>
                                </div>
                            </div>

                            <div className="w-[20rem] px-10 bg-orange-secondary-light py-5">
                                <h2 className="text-xl font-semibold mb-2 text-blue-primary">Make an offer</h2>
                                <form action="" className="">
                                    <div className="inputStyle">
                                        <label htmlFor="price">Price</label>
                                        <div className="flex items-center gap-0.5">
                                            <h2 className="text-sm">XAF</h2>
                                            <input type="number" className="inputField text-orange-primary font-semibold" onClick={openIsMakingOffer}/>
                                        </div>
                                    </div>
                                    {
                                        isMakingOffer &&
                                    <>
                                        <div className="inputStyle">
                                            <input type="text" name="buyerName" id="buyerName" placeholder="Name" className="inputField"/>
                                        </div>
                                        <div className="inputStyle">
                                            <input type="email" name="buyerEmail" id="buyerEmail" placeholder="Email" className="inputField"/>
                                        </div>
                                        <section className="flex items-center gap-2 px-4 py-1 text-xs bg-gray-100 mb-4 h-12">
                                            <h2>Flags</h2>
                                            <div className="flex flex-col">
                                                <label htmlFor="buyerPhoneNumber">Telephone</label>
                                                <input type="number" name="buyerPhoneNumber" id="buyerPhoneNumber" placeholder="+237 6 71 23 45 19" className="h-full bg-transparent inputField"/>
                                            </div>
                                        </section>

                                        <section className="flex gap-4">
                                            <button className="btn bg-[#CFD3DC] text-gray-secondary" onClick={closeIsMakingOffer}>Cancel</button>
                                            <button type="submit" className="btn bg-blue-primary text-white">Send</button>
                                        </section>
                                    </>
                                   }
                                </form>
                            </div>
                        </div>

                        <div className="px-6 py-8 bg-blulish-secondary my-[6.25rem] text-gray-secondary">
                            <div>
                                <h2 className="text-sm">Need to sell your car too?</h2>
                                <h2 className="text-2xl font-semibold mt-4 mb-8">We will help you!</h2>
                                <div className="flex items-center justify-end">
                                    <Link to={isAuth? "/addcar" : "/signup"}>
                                        <button className="btn bg-gray-secondary text-blulish-secondary">Sell your car</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}