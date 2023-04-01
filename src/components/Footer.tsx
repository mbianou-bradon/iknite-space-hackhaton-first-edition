import React from 'react'
import 'iconify-icon';

export default function Footer() {
  return (
    <div>
         <body className="bg-[#3a4d7c] flex justify-center items-center min-h-screen">
    <div className="bg-[#1e3161] space-y-6 text-white mx-auto rounded-xl shadow-md w-full max-w-6xl p-5 sm:px-10 [&_*]:transition [&_*]:ease-linear [&_*]:duration-200">
    <div>
        <div
            className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 [&>*>h1]:text-2xl [&>*>h1]:font-semibold [&>*>h1]:my-5 [&>*>h1]:px-4">
            <div>
                <h1>About the store</h1>
                <ul
                    className="[&>*]:mb-2  [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-md [&>*]:cursor-pointer [&>*:hover]:bg-blue-400 [&>*]:w-fit">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Become a customer</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Return policy</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
    
            <div>
                <h1>Language</h1>
                <ul
                    className="flex items-center flex-wrap  [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-md [&>*]:cursor-pointer [&>*:hover]:bg-blue-400 [&>*]:font-semibold [&>*:hover]:font-bold [&>*]:w-fit">
                    <li>Deutsch</li>
                    <li>English</li>
                    <li>Espanol</li>
                    <li>Francais</li>
                    <li>Indonesian</li>
                    <li>italian</li>
                    <li>Nederlands</li>
                    <li>Polnisch</li>
                    <li>Portugues</li>
                    <li>pyccknn</li>
                    <li>Tieng viiet</li>
                    <li>Tukkce</li>
                </ul>
            </div>
    
            <div>
                <h1>Get in touch</h1>
                <div
                    className="flex items-center gap-8 px-4 sm:px-10 text-2xl mb-4 font-semibold [&>*]:cursor-pointer [&>*:hover]:text-blue-400">
                    <div>
                        {/* <iconify-icon icon="lucide:facebook"></iconify-icon> */}
                    </div>
    
                    <div>
                        {/* <iconify-icon icon="lucide:twitter"></iconify-icon> */}
                    </div>
    
                    <div>
                        {/* <iconify-icon icon="lucide:linkedin"></iconify-icon> */}
                    </div>
                </div>
            </div>
        </div>
    
            <div>
                <ul
                    className="flex items-center justify-center flex-wrap gap-4 [&>*]:cursor-pointer text-slate-500 [&>*:hover]:text-white">
                    <li>Terms of purchase</li>
                    <li>Security and privacy</li>
                    <li>Newsletter</li>
                </ul>
            </div>
        </div>
    </div>
    
    <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
</body>

    </div>
  )
}
