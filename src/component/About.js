import React from 'react'
import "./About.css"

function About() {
  const [state] = React.useState({
    subtitle:'About Me',
    text:'Lorem Ipsum is simply dummy text of the printing and  types industry. Lorem Ipsum is simply dummy text of the printing and  types industry.Lorem Ipsum is simply dummy text of the printing and  types industry.Lorem Ipsum is simply dummy text of the printing and  types industry.'

  })
  return (
    <>
      <div className='about'>
        <div className='service__header'>
          <div className='container'>
            <div className='common'>              
              <h1 className='mainHeader'>{state.subtitle}</h1>
              <p className='mainContent'>{state.text}</p>

              <hr className='line'/>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default About