import Background from "../assets/images/Background.png"

export default function Hero(){
    return(
        <header className="sm:px-4 mb-[6.25rem]">
            <div className="relative h-[80vh] bg-slate-800">
                <div className="h-full">
                    <img src={Background} alt="" className="h-full w-full object-cover opacity-40"/>
                </div>
                <div className="text-5xl md:text-[4rem] w-[70%] md:w-[30%] leading-[4rem] text-white font-extrabold ml-10 absolute top-[30%] md:top-[40%]">
                    <h2>Find Your Next Car With Us</h2>
                </div>
            </div>
        </header>
    )
}