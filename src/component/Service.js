import React from 'react'
import "./Services.css"


function Service() {
  const [state] = React.useState({title:''})
  return (
    <>
        <div className='services'>
          <div className='container'>
            <div className='service__header'>
              <h2 className='heading'>Service</h2>
              <h3 className='mainHeader'>My Service</h3>
              <h7 className='mainContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</h7>


            </div>
          </div>
        </div>
    </>
  )
}

export default Service