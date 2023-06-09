import React, { useState } from "react";
import { ImageIcon } from "../assets/icons/icons";
import storage from "../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router";
import { v4 } from "uuid";

export default function CarForm() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [engineType, setEngineType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [imageUpload, setImageUpload]: any = useState([]);
  const [imageURL, setImageURL] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const navigator = useNavigate()

  const [percent, setPercent] = useState(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleUpload();
    // console.log(imageURL)
    
    const car = { name, model, engineType, fuelType, mileage, price, imageURL, description };

    console.log(JSON.stringify(car))

    const response = await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),      
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setModel("");
      setEngineType("");
      setFuelType("");
      setMileage("");
      setPrice("");
      setImageUpload("");
      setImageURL([]);
      setDescription("");
      setError(null);
      alert("New Car Added You will be redirected to Cars Page");
      console.log("New Car Created", json)
      // dispatch({type: 'CREATE_CANDIDATE', payload: json })
      navigator("/cars")
    }
  };

  const handleChangeFile = (e: any) => {

    let pickedFile;
    if(e.target.files && e.target.files.length > 0){
      pickedFile = e.target.files;
      setImageUpload(pickedFile);
    }
    

  };





  function handleUpload() {
    if (imageUpload.length  < 1) {
      alert("Please choose a file first!");
    }
    if(imageUpload.length > 3){
      alert("Please Select Maximum 3 images")
    }

    for(let i=0; i < 3; i++){
      const storageRef = ref(storage, `/ikmotorImages/${imageUpload[i].name + v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, imageUpload[i]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          ); // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {          
            setImageURL((prevUrlList)=> [...prevUrlList, url]);
          });
        }
      );
    }
  }

  return (
    <section className="bg-[#f1f6ed] py-8 px-4 sm:px-8 md:px-16 2xl:px-32 my-16 w-full [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">
      <h1 className="text-2xl md:text-4xl text-slate-800 font-bold">
        Sell your Car online
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 my-8">
        <div className="w-full flex flex-col [&>*]:max-w-2xl [&>*]:h-fit gap-8">
          <div className="relative add-photos flex flex-col justify-center items-center rounded-md shadow-inner px-4 py-8 border-2 border-dashed bg-slate-50 hover:bg-slate-100 cursor-pointer">
            <label
              htmlFor="photos"
              className="block absolute top-0 left-0 w-full h-full"
            ></label>
            <input
              type="file"
              multiple
              name="add-photos"
              id="photos"
              accept="image/*, video/*"
              className="absolute hidden"
              onChange={
                handleChangeFile
                /*
                (event) => {
                let file = event.target.files[0];                
                setImage(URL.createObjectURL(file));
                }
                */
              }
            />
            <span className="text-2xl block p-4 rounded-full bg-slate-200 text-green-primary">
              <ImageIcon />
            </span>
            <span className="text-xl text-slate-600 font-medium block pt-4">
              Add Photos
            </span>
          </div>

          <div className="carName">
            <input
              type="text"
              id="carName"
              className="carName py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary"
              placeholder="Car Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="carModel">
            <input
              type="text"
              id="model"
              className="carModel py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary"
              placeholder="Car Model"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="price flex items-center bg-gray-300 rounded-md">
            <input
              type="text"
              id="price"
              className="price py-2 px-4 min-w-0 border w-full rounded-l-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary"
              placeholder="Price e.g. 15.000.000"
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="bg-gray-300 h-full w-[15%] flex items-center justify-center font-bold text-slate-500 rounded-r-md">
              <h2>FCFA</h2>
            </div>
          </div>

          <div className="mileage flex items-center bg-gray-300 rounded-md">
            <input
              type="text"
              id="mileage"
              className="price py-2 px-4 min-w-0 border w-full rounded-l-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary"
              placeholder="Mileage e.g. 15"
              onChange={(e) => setMileage(e.target.value)}
            />
            <div className="bg-gray-300 h-full w-[15%] flex items-center justify-center font-bold text-slate-500 rounded-r-md">
              <h2>KM/hr</h2>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col [&>*]:max-w-2xl [&>*]:h-fit gap-8">
          <div>
            {/* <label htmlFor="fuelType">Fuel Type</label> */}
            <select
              id="category"
              className="category py-2 px-4 mt-2 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary"
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="" className="font-slate-300">
                Fuel Type
              </option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Gas">Gas</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            {/* <label htmlFor="engineType">Engine Type</label> */}
            <select
              id="engineType"
              className="form-input category py-2 px-4 mt-2 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary"
              onChange={(e) => setEngineType(e.target.value)}
            >
              <option value="">Engine Type</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <textarea
            name="description"
            id="desc"
            cols={30}
            rows={5}
            className="form-input py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary resize-none"
            placeholder="Write description here ..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start md:justify-end text-slate-800 font-medium gap-4 py-4">
        <button
          className="py-2 px-4 rounded-md bg-green-primary hover:bg-green-secondary focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 text-white font-bold transition-all duration-200 ease-linear drop-shadow-lg"
          onClick={handleSubmit}
        >
          Add Car
        </button>
        <button className="py-2 px-4 rounded-md bg-orange-secondary hover:bg-orange-secondary-light focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 text-white font-bold transition-all duration-200 ease-linear drop-shadow-lg">
          Discard changes
        </button>
      </div>
    </section>
  );
}
