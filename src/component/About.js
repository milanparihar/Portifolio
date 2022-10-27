import React from "react";
import "../App.css"

function About() {
  const [header] = React.useState({
    subtitle: "About Me",
    text: "Lorem Ipsum is simply dummy text of the printing and  types industry. Lorem Ipsum is simply dummy text of the printing and  types industry.Lorem Ipsum is simply dummy text of the printing and  types industry.Lorem Ipsum is simply dummy text of the printing and  types industry.",
  });
  const [state] = React.useState([
    {id:1 , title: 'Name', text:'Milan Parihar'},
    {id:2 , title: 'Email', text:'milanparihar1234@.com'},
    {id:3 , title: 'Contact', text:'+91 88948-71736'},
    {id:4 , title: 'Linkedin', text:'Milan Parihar'},
  ]);
  return (
    <>
      <div className="about" id="about12"  >
        <div className="about__header">
          <div className="container">
            <div className="common">
              <h1 className="mainHeader">{header.subtitle} <span></span></h1>
              <p className="mainContent">{header.text}</p>
              <p>
                <span></span>
              </p>
            </div>

            <div className="row h-21 alignCenter">
              <div className="col-6">
                <div className="about__img">
                  <img src="src/assets/about.png" alt="" srcset="" />
                </div>
              </div>
              <div className="col-6">
                <div className="about__info">
                  <h1>Hi There</h1>
                  <div className="about__info-p1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <div className="about__info-p2">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </div>
                  <div className="info__contact">
                    <div className="row">
                      {state.map(info=>(
                      <div className="col-6">
                        <strong>{info.title} :</strong>
                        <p>{info.text}</p>
                      </div>
                      ))}
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
