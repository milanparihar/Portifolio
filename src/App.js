// import logo from "./logo.svg";
import "./App.css";
// import {Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Banner from "./component/Banner";
import Project from "./component/Project";
import Skill from "./component/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <About/>
      <Contact/>
      <Skill/>
      <Service/>
      <Project/>

      {/* <Routes>
        <Route path="Service" element={<Service></Service>}/>              
        <Route path="/" element={<Banner></Banner>}/> 
        <Route path="/" element={<Home></Home>}/>      
        <Route path="Contact" element={<Contact></Contact>}/>              
        <Route path="About" element={<About></About>}/>       
        <Route path="Skill" element={<Skill></Skill>}/>       
        <Route path="Project" element={<Project></Project>}/>       
      </Routes> */}
    </>
  );
}

export default App;
