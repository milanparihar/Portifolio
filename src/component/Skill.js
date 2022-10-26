import React from 'react';
import "../App.css"
// import { Link } from "react-router-dom";
import {Link}  from "react-scroll";



function Skill() {
    const[state] = React.useState([
        {id:1 , percentage: '90', skill:'HTML, CSS'},
        {id:2 , percentage: '80', skill:'JAVASCRIPT'},
        {id:3 , percentage: '60', skill:'GITHUB, BOOTSTRAP, TAILWIND'},
        {id:4 , percentage: '70', skill:'REACT.JS'},
    ]);
  return (
    <div className="skill" id='skill12'>
        <div className="skill__header">
            <div className="container">
                <div className="comman">
                    <h1 className="mainHeader">Skills</h1>
                </div> 

                <div className="row">
                    <div className="col-6">
                        <p>I`M EXPERT ON</p>
                        <h1>Let`s Work Together</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa at non eveniet sit possimus facere ut repellendus inventore. Quas culpa suscipit nemo ratione ea vitae quod voluptatum magni totam!</p>
                        <Link to="contact" id='contact12'  smooth={true}
                  offset={10}
                  duration={500} className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Hire Me Now</Link>

                    </div>
                    <div className="col-6">
                        {state.map(info=>(
                        
                        <div className='skilllist'>
                            <h4>{info.skill}</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{info.percentage}%</div>
                            </div>
                        </div>    
                            
                        ))}
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Skill
