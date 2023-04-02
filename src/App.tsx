import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CarForm from './components/CarForm';
import CarDescription from './pages/CarDescription';

function App() {
  return (
    <div>
      <Navbar />
        <CarDescription />
      <Footer />
    </div>
  );
}

export default App;
