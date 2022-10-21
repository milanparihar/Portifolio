// import logo from "./logo.svg";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Banner from "./component/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      {/* <Service/> */}
      <Routes>
        <Route path="Service" element={<Service></Service>}/>              
        {/* <Route path="/" element={<Banner></Banner>}/>  */}
        <Route path="/" element={<Home></Home>}/>      
        <Route path="Contact" element={<Contact></Contact>}/>              
        <Route path="About" element={<About></About>}/>       
      </Routes>
    </>
  );
}

export default App;
