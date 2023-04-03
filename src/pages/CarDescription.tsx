import { GoLocation } from "react-icons/go";
import { BiChevronDown, BiChevronUp, BiChevronLeft } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import React from "react";

import { Link, useParams, useLocation } from "react-router-dom";
import { Props } from "../dataTypes";
import cmrflag from "../assets/icons/cameroon.png";
export default function CarDescription(props: any) {
  // const [car, setCar] = React.useState<Props>({
  //     _id: "",
  //     name: "",
  //     model: "",
  //     img:"",
  //     engineType: "",
  //     fuelType: "",
  //     mileage: "",
  //     price: ""
  // })
  const [isMakingOffer, setIsMakingOffer] = React.useState<boolean>(false);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const location = useLocation();
  const propsData = location.state;
  //   console.log(propsData);

  const openIsMakingOffer = () => {
    setIsMakingOffer(true);
  };
  const closeIsMakingOffer = () => {
    setIsMakingOffer(false);
  };

    let images = propsData.imageURL;

  const [bidderName, setBidderName] = React.useState("");
  const [bidPrice, setBidPrice] = React.useState("0")
  const [tempName, setTempName] = React.useState("");
const [tempBid, setTempBid] = React.useState("0")

  const handleBidding = () => {
    setBidderName(tempName);
    setBidPrice(tempBid);
  }

  return (
    <div className="px-10 sm:px-20">
      <div>
        <header className="mt-2 mb-[6.25rem]">
          <div className="flex items-center gap-4">
            <Link to="/cars">
              <div className="w-fit flex items-center justify-center border border-slate-950 pl-2 pr-4 py-1 hover:bg-slate-950 hover:text-white cursor-pointer">
                <div className="text-lg sm:text-2xl">
                  <BiChevronLeft />
                </div>
                <h2 className="text-xs sm:text-sm ">Return Back</h2>
              </div>
            </Link>

            <div className="font-serif">
              <h2>
                Home/Cars/<span>{propsData.name}</span>
              </h2>
            </div>
          </div>

          <div className="my-5">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-2">
              {propsData.name}
            </h2>
            <div className="flex items-center gap-1">
              {/* Location Icon */}
              <div className="text-orange-primary">
                <GoLocation />
              </div>
              <h2>Douala</h2>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3">
          <div className="sm:col-span-2 w-full sm:w-[90%]">
            <div className="grid grid-cols-1 sm:grid-cols-4 w-fit gap-7">
              <div className="md:col-span-3 bg-slate-200 h-[20rem] sm:h-[28rem] w-[20.5rem] sm:w-[29rem] rounded">
                <img
                  src={images[0]}
                  alt=""
                  className="h-full object-cove"
                />
              </div>

              <div className="flex md:flex-col items-center justify-between">
                <div className="text-3xl cursor-pointer text-blue-primary hover:scale-110 hidden md:block">
                  <BiChevronUp />
                </div>
                <div className="flex md:flex-col gap-5 [&>*]:w-[4rem] [&>*]:h-[3rem] [&>*]:sm:w-[9rem] [&>*]:sm:h-[7rem] [&>*]:bg-slate-200 [&>*]:rounded [&>*:hover]:scale-110">
                  {
                    images.map((image: string)=>{
                      return (
                      <div>
                        <img src={image} className="h-full object-cover"/>
                      </div>
                      )
                    })
                    
                  }
                </div>
                <div className="text-3xl cursor-pointer text-blue-primary hover:scale-110 hidden md:block">
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
                <p>
                  <span>4</span> buyers have viewed this car in the last{" "}
                  <span>24</span> hours
                </p>
              </div>

              <div>
                <div>
                  <p className="text-slate-500 font-semibold my-5">
                    About:{" "}
                    <span className="text-lg sm:text-2xl font-semibold text-green-secondary">
                      {propsData.name}
                    </span>
                  </p>
                </div>
                <div className="[&>*]:mb-3 [&>*]:grid [&>*]:grid-cols-3 [&>*>p]:text-slate-500 [&>*>h2]:text-black [&>*>h2]:font-semibold text-sm sm:text-[1rem]">
                  <div>
                    <p>Engine Type:</p> <h2>{propsData.engineType}</h2>
                  </div>
                  <div>
                    <p>Model: </p> <h2>{propsData.model}</h2>
                  </div>
                  <div>
                    <p>Fuel Type: </p> <h2>{propsData.fuelType}</h2>
                  </div>
                  <div>
                    <p>Mileage: </p> <h2>{propsData.mileage} km/h</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Entra Comments */}
            <div className="bg-slate-50 py-5 px-8 mb-[6.25rem]">
              <div className="flex items-center gap-1 mb-5 text-2xl font-semibold">
                <h2>Seller Comment</h2>
              </div>
              <p className="text-xs w-[80$] sm:w-[60%] leading-6">
                {propsData.description}
              </p>
            </div>
          </div>

          {/* Side Bar */}
          <div className="">
            <div className="h-[48rem] p-8 bg-green-primary">
              <div className="my-8">
                <h2 className="text-3xl font-bold text-orange-primary">
                  FCFA <span>{propsData.price}</span>
                </h2>

                <div className="my-5">
                  <div className="fl&>*>h2]ex items-center justify-between font-semibold mb-3 text-gray-secondary">
                    <h2>Convey Currency</h2>
                    <div className="text-2xl pt-1">
                      <BiChevronUp />
                    </div>
                  </div>
                  <div className="font-semibold text-orange-primary">
                    USD <span>450</span>
                  </div>
                </div>
              </div>

              <div className="mb-[2rem] grid grid-cols-2">
                <div className="text-xs text-slate-100">
                  <h2>Latest bid</h2>
                  <p className="my-1">
                    Person: <span className="font-semibold uppercase">{bidderName}</span>
                  </p>
                  <p>
                    Amount: 
                    <span className="text-orange-primary font-semibold">
                        {bidPrice} FCFA
                    </span>
                  </p>
                </div>

                <div className="text-xs text-slate-100">
                  <h2>Least bid</h2>
                  <p className="my-1">
                    Person: <span className="font-semibold uppercase">{bidderName}</span>
                  </p>
                  <p>
                    Amount: <span className="text-orange-primary font-semibold"> {bidPrice} FCFA</span>
                  </p>
                </div>
              </div>

              <div className="w-[17rem] sm:w-[20rem] px-5 sm:px-10 bg-orange-secondary-light py-5">
                <h2 className="text-xl font-semibold mb-2 text-blue-primary">
                  Make an offer
                </h2>
                <form action="" className="">
                  <div className="inputStyle">
                    <label htmlFor="price">Price</label>
                    <div className="flex items-center gap-0.5">
                      <h2 className="text-sm">XAF</h2>
                      <input
                        type="number"
                        className="inputField text-orange-primary font-semibold"
                        onClick={openIsMakingOffer}
                        onChange={(e)=> setTempBid(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {isMakingOffer && (
                    <>
                      <div className="inputStyle">
                        <input
                          type="text"
                          name="buyerName"
                          id="buyerName"
                          placeholder="Name"
                          className="inputField"
                          onChange={(e)=> setTempName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="inputStyle">
                        <input
                          type="email"
                          name="buyerEmail"
                          id="buyerEmail"
                          placeholder="Email"
                          className="inputField"
                          required
                        />
                      </div>

                      <section className="flex items-center gap-2 px-4 py-1 text-xs bg-gray-100 mb-4 h-12">
                        <h2>
                          <img src={cmrflag} alt="" />
                        </h2>
                        <div className="flex flex-col">
                          <label htmlFor="buyerPhoneNumber">Telephone</label>
                          <input
                            type="number"
                            name="buyerPhoneNumber"
                            id="buyerPhoneNumber"
                            placeholder="+237 6 71 23 45 19"
                            className="h-full bg-transparent inputField"
                          />
                        </div>
                      </section>

                      <section className="flex gap-4">
                        <button
                          className="btn bg-[#CFD3DC] text-gray-secondary text-sm"
                          onClick={closeIsMakingOffer}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn bg-blue-primary text-white text-sm"
                          onClick={handleBidding}
                        >
                          Send
                        </button>
                      </section>
                    </>
                  )}
                </form>
              </div>
            </div>

            <div className="px-6 py-8 bg-blulish-secondary my-[6.25rem] text-gray-secondary">
              <div>
                <h2 className="text-sm">Need to sell your car too?</h2>
                <h2 className="text-2xl font-semibold mt-4 mb-8">
                  We will help you!
                </h2>
                <div className="flex items-center justify-end">
                  <Link to={isAuth ? "/addcar" : "/signup"}>
                    <button className="btn bg-gray-secondary text-blulish-secondary">
                      Sell your car
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
