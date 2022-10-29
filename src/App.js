// import logo from "./logo.svg";
import "./App.css";
// import {Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Banner from "./component/Banner";
import Skill from "./component/Skill";
import Blog from "./component/Blog";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <About/>
      <Contact/>
      <Skill/>
      <Service/>
      <Blog/>
      <Footer/>
      
      

      {/* <Routes>
        <Route path="Service" element={<Service></Service>}/>              
        <Route path="/" element={<Banner></Banner>}/> 
        <Route path="Contact" element={<Contact></Contact>}/>              
        <Route path="About" element={<About></About>}/>       
        <Route path="Skill" element={<Skill></Skill>}/>       
        <Route path="Blog" element={<Blog></Blog>}/>       
      </Routes> */}
    </>
  );
}

export default App;
