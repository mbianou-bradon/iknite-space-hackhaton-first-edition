import Card from "./Cards/Card";
import { useEffect, useState } from "react";


export default function RecentCars(){
    const [cars, setCars]: any = useState(null)

    useEffect(() => {
        // FETCHING CANDIDATES 
        const fetchCars = async () => {
          const response = await fetch("/api/cars");
          const json = await response.json();
    
          if (response.ok) {
            setCars(json)
          }
        };
    
        fetchCars();    
        
      }, []);


    return(
        <div className="px-10 sm:px-20 mb-[6.25rem]">
            <h2 className="text-3xl font-bold my-5">Most recent cars for sale in Cameroon</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2rem] gap-y-[3.125rem]">
                {cars && cars.map((car: any) => (
                    <Card _id={car._id} imageURL={car.imageURL} name={car.name} model={car.model} engineType={car.engineType} fuelType={car.fuelType} mileage={car.mileage} price={car.price} description={car.description}/>
                ))}
                
                
            </div>
        </div>
    )
}



/*

<Card img="https://content-images.carmax.com/qeontfmijmzv/25NcA62ks4WtOMUJlvsW9x/77ace1ff19f51d1968a363b1515c4af6/acura.jpg" _id={""} name={"TOYOTA"} model={""} engineType={""} fuelType={""} mileage={""} price={""}/> 
                <Card img="https://pictures.dealer.com/a/acuraofthornhill/0082/06771c6d46558c7ce46218eb3af69670x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" _id={""} name={"MERCEDES"} model={""} engineType={""} fuelType={""} mileage={""} price={"600,000"}/>
                <Card img="https://pictures.dealer.com/c/ccipeelchryslerjeepdodge/1203/224da34703c030fac0c3f5d55af8e553x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" _id={""} name={""} model={""} engineType={""} fuelType={""} mileage={""} price={""}/>
                <Card img="https://listings-prod.tcimg.net/listings/5095/62/05/19UUB2F42KA010562/VIOIUQIZFOPKYBUBTRQ6MEKPUE-cr-540.jpg" _id={""} name={""} model={""} engineType={""} fuelType={""} mileage={""} price={""}/>

                <Card img="https://pictures.dealer.com/c/ccipeelchryslerjeepdodge/1385/7ee70e0f72ea767751f6e54afad0a272x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" _id={""} name={"TOYOTA"} model={""} engineType={""} fuelType={""} mileage={""} price={""}/>
                <Card img="https://pictures.dealer.com/j/jenkinshindaofleesburg/0852/88db4db23b8ffd942e1e629a59d1e84ax.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" _id={""} name={""} model={""} engineType={""} fuelType={""} mileage={""} price={""}/>
                <Card img="https://pictures.dealer.com/c/claytonvolvovcna/0737/a3559704e951aa905dc02f4c67825b5bx.jpg?impolicy=resize&w=640" _id={""} name={""} model={""} engineType={""} fuelType={""} mileage={""} price={""}/>
                <Card img="https://pictures.dealer.com/h/hondaofillinoisspringfield/1880/b3ac42da8caf94c9f0fab95953da22c9x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" _id={""} name={""} model={""} engineType={""} fuelType={""} mileage={""} price={""}/>

*/