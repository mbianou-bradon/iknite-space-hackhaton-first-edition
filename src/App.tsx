import './App.css';
import { createBrowserRouter, Outlet, RouterProvider, Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { error } from 'console';
import CarDescription from './pages/CarDescription';
import CarForm from './components/CarForm';
import Cars from './pages/Cars';
import Error from './Error';
import SignUp from './pages/SignUp';
import SignUpAndSignIn from './pages/SignUp';


const MyApp = ():JSX.Element => {
  return (
    <div className="bg-[#F5F5F5] [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-[170ms]">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
    element: <MyApp />,
    errorElement: <Error />,
    children: [
      {path: "/", element: <Home/> },
      { path: "/cars", element: <Cars /> },
      { path: "/cars/:carId", element: <CarDescription />},
      { path: "/addcar", element:<CarForm/>},
      { path: "/signup", element: <SignUpAndSignIn />}
    ]
    }
  ]
)


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/cars/:carId" element={<CarDescription />} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
      </Routes> */}
    </div>
    
  );
}

export default App;
