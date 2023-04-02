import React, { useState } from "react";
import { ImageIcon } from "../assets/icons/icons";
import storage from "../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function CarForm() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [engineType, setEngineType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const [percent, setPercent] = useState(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const car = { name, model, engineType, fuelType, mileage, price, image };

    const response = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
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
      setImage("");
      setError(null);
      console.log("New Car Added", json);
      // dispatch({type: 'CREATE_CANDIDATE', payload: json })
    }
  };

  const handleChangeFile = (event: any) => {
    setImage(event.target.files[0]);

    // const file = document.getElementById("photos").files;
    // const formData = new FormData();
    // formData.append("img", file[0])
  };

  function handleUpload() {
    if (!image) {
      alert("Please choose a file first!");
    }
    const storageRef = ref(storage, `/files/${image}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
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
          console.log(url);
        });
      }
    );
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
            <span className="text-2xl block p-4 rounded-full bg-slate-200 text-emerald-800">
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
              className="carName py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              placeholder="Car Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="carModel">
            <input
              type="text"
              id="model"
              className="carModel py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              placeholder="Car Model"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="price flex items-center bg-gray-300 rounded-md">
            <input
              type="number"
              id="price"
              className="price py-2 px-4 min-w-0 border w-full rounded-l-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="bg-gray-300 h-full w-[15%] flex items-center justify-center font-bold text-slate-500 rounded-r-md">
              <h2>FCFA</h2>
            </div>
          </div>

          <div className="mileage flex items-center bg-gray-300 rounded-md">
            <input
              type="number"
              id="mileage"
              className="price py-2 px-4 min-w-0 border w-full rounded-l-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              placeholder="Mileage"
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
              className="category py-2 px-4 mt-2 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="" className="font-slate-300">
                Fuel Type
              </option>
              <option value="diesel">Diesel</option>
              <option value="petrol">Petrol</option>
              <option value="gas">Gas</option>
            </select>
          </div>

          <div>
            {/* <label htmlFor="engineType">Engine Type</label> */}
            <select
              id="engineType"
              className="form-input category py-2 px-4 mt-2 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              onChange={(e) => setEngineType(e.target.value)}
            >
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
          <textarea
            name="description"
            id="desc"
            cols={30}
            rows={5}
            className="form-input py-2 px-4 min-w-0 border w-full rounded-md hover:outline-one hover:border-gray-300 hover:outline-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 resize-none"
            placeholder="Write description here ..."
            onChange={(e) => setEngineType(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start md:justify-end text-slate-800 font-medium gap-4 py-4">
        <button
          className="py-2 px-4 rounded-md bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 text-white font-bold transition-all duration-200 ease-linear drop-shadow-lg"
          onClick={handleSubmit}
        >
          Add Car
        </button>
        <button className="py-2 px-4 rounded-md bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 text-white font-bold transition-all duration-200 ease-linear drop-shadow-lg">
          Discard changes
        </button>
      </div>
    </section>
  );
}
