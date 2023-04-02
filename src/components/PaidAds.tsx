import PromoCard from "./Cards/PromoCard";


export default function PaidAds(){
    return(
        <div className="px-20 flex items-center justify-between flex-wrap">
            <PromoCard img="https://kemez.cm/images/listings/2021-06/toyota_camry_for_sale_in_cameroon-1624888444-328-e.jpeg" name="TOYOTA CAMRY" promo={true}/>
            <PromoCard img="https://cdn.cars2africa.com/88024-thickbox_default/used-avensis-1-8-70535.jpg" name="Toyota Avensis 1.8" promo={true}/>
            <PromoCard img={"https://www.camerbiz.com/product-images/1629/_img_2_640x480.jpg"} name={"Toyota Corolla Runx"} promo={false}/>
            <PromoCard img={"https://kemez.cm/images/listings/2021-05/toyota_auris_for_sale_in_cameroon-1621097086-553-e.jpeg"} name={"Toyota Auris"} promo={false}/>
        </div>
    )
}