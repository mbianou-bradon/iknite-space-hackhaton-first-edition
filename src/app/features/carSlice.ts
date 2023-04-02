import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { Props } from "../../dataTypes";
import React from "react";

// const [cars, setCars] = React.useState([])

const cars: Props[] = []
// React.useEffect(()=>{
//         const fetchCars = async () => {
//         const response = await fetch("/api/cars")
//         const json = await response.json()

//         if(response.ok){
//             setCars(json)
//         }
//     }

//     fetchCars()
// }, [])




const initialState: { cars: Props[] } = {
    cars: cars
}

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        createCar: (state, action: PayloadAction<Props>) => {
            state.cars = [...state.cars, action.payload]
        }
    }
})

export const { createCar } = carSlice.actions;
export default carSlice.reducer