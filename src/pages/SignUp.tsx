import React from "react"
import { useNavigate } from "react-router"




export default function SignUpAndSignIn(){

const [alreadyExist, setAlreadyExist] = React.useState<boolean>(false)
const navigate = useNavigate()
const handleAlreadyExist = () => {
    setAlreadyExist(!alreadyExist)
}

    const handleNavigation = ()=>{
        navigate("/addcar")
    }

    return(
        <div className="h-fit mb-10">
            <div className="w-[90%] sm:w-[50%] mx-auto">
                <form action="">
                    { alreadyExist? 
                    <div>
                        <div className="inputStyle border">
                            <input type="text" name="name" id="name" className="inputField" placeholder="Name" required/>
                        </div>
                        <div className="inputStyle border my-8">
                            <input type="email" name="email" id="email" className="inputField" placeholder="Email Address" required/>
                        </div>
                        <div className="inputStyle border my-8">
                            <input type="password" name="password" id="password" className="inputField" placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn bg-green-800 w-full mt-8 mb-4 text-white" onClick={handleNavigation}>Sign In</button>
                        <div className="text-xs flex flex-col items-end justify-end">
                            <h2 className="w-fit">Don't have an account?</h2>
                            <h2 className="text-orange-600 font-semibold cursor-pointer hover:underline w-fit" onClick={handleAlreadyExist}>Sign Up</h2>
                        </div>
                    </div>
                    
                    :
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="inputStyle border col-span-2">
                            <input type="text" name="name" id="name" className="inputField" placeholder="Name" required/>
                        </div>
                        <div className="inputStyle border col-span-2 sm:col-span-1">
                            <input type="email" name="email" id="email" className="inputField" placeholder="Email Address" required/>
                        </div>
                        <div className="inputStyle border col-span-2 sm:col-span-1">
                            <input type="number" name="phoneNumber" id="phoneNumber" className="inputField" placeholder="Phone Number" />
                        </div>

                        <div className="inputStyle border">
                            <input type="text" name="location" id="location" className="inputField" placeholder="CITY" />
                        </div>

                        <div className="inputStyle border">
                            <div>

                            </div>
                            <input type="number" name="phoneNumber" id="phoneNumber" className="inputField" placeholder="Phone Number" />
                        </div>

                        <div className="inputStyle border">
                            <input type="password" name="password" id="password" className="inputField" placeholder="Password"/>
                        </div>
                        <div className="inputStyle border">
                            <input type="password" name="confirmPassword" id="confirmPassword" className="inputField" placeholder="Confirm Password"/>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" value={"seller"} id="role" name="role" />
                            <label htmlFor="role" className="inline-block ml-2 text-sm">Register as seller</label>
                        </div>
                        <div className="inputStyle border">
                            <input type="text" name="importLicence" id="importLicence" className="inputField" placeholder="Import Licence" />
                        </div>

                        <button type="submit" className="btn bg-green-800 w-full mt-8 mb-4 text-white col-span-2">Sign Up</button>
                        <div className="text-xs col-span-2 flex flex-col items-end justify-end">
                            <h2 className="w-fit">Already have an account?</h2>
                            <h2 className="text-orange-600 font-semibold cursor-pointer hover:underline w-fit" onClick={handleAlreadyExist}>Sign In</h2>
                        </div>
                    </div>

                    }
                </form>
            </div>
        </div>
    )
}