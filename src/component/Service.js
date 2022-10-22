import React from 'react'
import "./Services.css"
// import { CgWebsite, SiTryhackme, FaGitAlt, ImFileVideo, HiOutlineComputerDesktop ,ImProfile} from 'react-icons/fa';
import {FaGitAlt} from 'react-icons/fa';



function Service() {
  const [header] = React.useState({title:'SERVICE' ,subtitle:'My Service', text:'Lorem Ipsum is simply dummy text of the printing and  types industry. dummy text ever since the 1500s, when an unk'});


  const [state] = React.useState([

    { 
      id: 1, 
      icon: 'CgWebsite',
      heading: 'Web Developer',
      text: "Lorem Ipsum is simply dummy text of the printing and  types industry."
    },


    { 
      id: 2, 
      icon: 'ImFileVideo',
      heading: 'Video Editor',
      text: "Lorem Ipsum is simply dummy text of the printing and  types industry."
    },


    { 
      id: 3, 
      icon: 'FaGitAlt',
      heading: 'Git Hub',
      text: "Lorem Ipsum is simply dummy text of the printing and  types industry."
    },


    { 
      id: 4, 
      icon: 'SiTryhackme',
      heading: 'Hacking',
      text: "Lorem Ipsum is simply dummy text of the printing and  types industry."
    },


    { 
      id: 5, 
      icon: 'DiPhotoshop',
      heading: 'Photo Editor',
      text: "Lorem Ipsum is simply dummy text of the printing and  types industry."
    },


    { 
      id: 6, 
      icon: 'ImProfile',
      heading: 'Resume Maker',
      text: "Lorem Ipsum is simply dummy text of the printing and  types industry."
    },

  ]);
  return (
    <>
        <div className='services'>
          <div className='col'>
            <div className='service__header'>
              <div className='common'>
              <h3 className='heading'>{header.title}</h3>
                <h1 className='mainHeader'>{header.subtitle}</h1>
                <p className='mainContent'>{header.text}</p>
              </div>

              <hr className='line'/>

              <div className='row-1'>
                {state.map((info)=>(

                <div className='col-10'>
                <div className='service__box'>
                  <FaGitAlt className='icon'/>
                  <div className='service__box-header'>{info.heading}</div>
                  <div className='service__box-p'>{info.text}</div>
                </div>                 
                </div>  
            

                ))}
                              
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Service