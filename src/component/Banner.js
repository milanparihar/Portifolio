import React from 'react'
import "../App.css"
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaGitAlt, FaInstagram, FaLinkedinIn} from 'react-icons/fa';


function Banner() {
    const [state ] = React.useState({title: 'I`m Milan Parihar,' , text:'When using elements that are used to trigger in-page functionality like collapsing content, rather than linking'});
  return (
        <div  className='bgimg' id='banner' alt='banner'>
    <header className="header">
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='header__content'>
                        <div className='header__section'>
                            <ul className='header__ul'>
                                <li>
                                    <FaFacebookF/>
                                </li>
                                <li>
                                    <FaGitAlt/>
                                </li>
                                <li>
                                    <FaLinkedinIn/>
                                </li>
                                <li>
                                    <FaInstagram/>
                                </li>
                        

                            </ul>

                            <div className='welcomeMsg'>
                                <h2>Hi,</h2>
                                <h2>{state.title}</h2>
                            </div>
                            <h3 className='col-9'>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer.', 'Student.', 'App Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                            </h3>
                                <p>{state.text}</p>
                            <div className='header__button'>
                            <a href='/' type="button" className="btn btn-success">My Portfolio</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
 
    </header>
        </div>
  )
}

export default Banner

