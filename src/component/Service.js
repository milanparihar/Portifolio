import React from 'react'
import "./Services.css"
import { FaFacebookF, FaGitAlt, FaInstagram, FaLinkedinIn} from 'react-icons/fa';



function Service() {
  const [state] = React.useState({title:'SERVICE' ,subtitle:'My Service', text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unk'})
  return (
    <>
        <div className='services'>
          <div className='col-7'>
            <div className='service__header'>
              <div className='common'>
              <h3 className='heading'>{state.title}</h3>
                <h1 className='mainHeader'>{state.subtitle}</h1>
                <p className='mainContent'>{state.text}</p>
              </div>

              <hr className='line'/>

              <div className='row'>
                <div className='col-4'>
                  <div className='service__box'>
                    <FaGitAlt className='icon'/>
                    <div className='service__box-header'>Web Development</div>
                    <div className='service__box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                  </div>
                  <div className='service__box'>
                    <FaGitAlt className='icon'/>
                    <div className='service__box-header'>Web Development</div>
                    <div className='service__box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                  </div>
                  <div className='service__box'>
                    <FaGitAlt className='icon'/>
                    <div className='service__box-header'>Web Development</div>
                    <div className='service__box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                  </div>
                  
                </div>
                  

              </div>
              <div className='row'>
                <div className='col-4'>
                  <div className='service__box'>
                    <FaGitAlt className='icon'/>
                    <div className='service__box-header'>Web Development</div>
                    <div className='service__box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                  </div>
                  <div className='service__box'>
                    <FaGitAlt className='icon'/>
                    <div className='service__box-header'>Web Development</div>
                    <div className='service__box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                  </div>
                  <div className='service__box'>
                    <FaGitAlt className='icon'/>
                    <div className='service__box-header'>Web Development</div>
                    <div className='service__box-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard</div>
                  </div>
                  
                </div>
                  

              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Service