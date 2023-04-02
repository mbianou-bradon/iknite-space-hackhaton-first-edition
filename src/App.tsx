import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CarForm from './components/CarForm';

function App() {
  return (
    <div>
      <Navbar />
        <CarForm />
      <Footer />
    </div>
  );
}

export default App;
