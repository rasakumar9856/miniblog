import { Component, useEffect, useState } from 'react'
import './App.css'
import Components from './Componets/Components';
import Adduser from './Componets/Adduser';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

function App() {
 const [showForm, setShowForm] = useState(false);
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/" element={<Components />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
