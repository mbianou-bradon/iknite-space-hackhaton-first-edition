import React from "react";
import { BsSearch } from "react-icons/bs"

export default function LowerNavbar() {
  return (
    <div className="mt-5">
        <section className="flex items-center justify-between flex-wrap gap-y-5">
            <div className="flex gap-5 [&>div>select]:px-2 [&>div>select]:py-1 [&>div>select]:bg-transparent [&>div>select]:border [&>div>select]:text-green-800 [&>div>select:focus]:border-slate-300">
                <div>
                    <select name="currency" id="currency">
                        <option value="fcfa">FCFA</option>
                        <option value="usd">USD</option>
                    </select>
                </div>

                <div>
                    <select name="language" id="language">
                        <option value="fcfa">English</option>
                        <option value="usd">French</option>
                    </select>
                </div>
            </div>

            <div className="w-full md:w-[80%] flex items-center border py-1 p-4 rounded">
                <div className="w-full">
                    <input type="text" name="search" id="search" placeholder="Search" className="inputField text-green-800 w-full"/>
                </div>
                <div>
                    <BsSearch />
                </div>
            </div>
        </section>

    </div>
  );
}