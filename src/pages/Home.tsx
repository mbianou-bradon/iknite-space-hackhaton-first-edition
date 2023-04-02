import Filter from "../components/Filter";
import Hero from "../components/Hero";
import PaidAds from "../components/PaidAds";
import RecentCars from "../components/RecentCars";


export default function Home(){
    return(
        <div>
            <Hero/>
            <Filter />
            <PaidAds />
            <RecentCars />
        </div>
    )
}