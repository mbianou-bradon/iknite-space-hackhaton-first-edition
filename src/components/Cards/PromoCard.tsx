import specialOffer from "../../assets/images/specialOffer.png"
import percentOff from "../../assets/images/percent_off.png"

interface Props {
    img: string
    name: string
    promo: boolean
}

export default function PromoCard(prop: Props){

    return (
        <div className="relative h-[15.625rem] w-[17.2rem] bg-white border-2 cursor-pointer hover:shadow-md">
            <div className="w-full h-[11rem] bg-[#D9D9D9]">
                <img src={prop.img} alt="" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="carName text-xl px-4 h-[4.625rem] text-slate-800 font-semibold flex items-center uppercase">
                <h2>{prop.name}</h2>
            </div>
            <div className="-rotate-[30deg] scale-[1.3] absolute -top-1 -left-1">
                <img src={prop.promo? specialOffer : percentOff} alt="" />
            </div>
        </div>
    )
}