import React from "react";
import "./About.css";

function About() {
  const [state] = React.useState({
    subtitle: "About Me",
    text: "Lorem Ipsum is simply dummy text of the printing and  types industry. Lorem Ipsum is simply dummy text of the printing and  types industry.Lorem Ipsum is simply dummy text of the printing and  types industry.Lorem Ipsum is simply dummy text of the printing and  types industry.",
  });
  return (
    <>
      <div className="about">
        <div className="service__header">
          <div className="container">
            <div className="common">
              <h1 className="mainHeader">{state.subtitle}</h1>
              <p className="mainContent">{state.text}</p>

              <hr className="line" />
            </div>

            <div className="row">
              <div className="col-6">
                <div className="about__img">
                  <img src="src/assets/about.png" alt="" />
                </div>
              </div>
              <div className="about__info">
                <h1>Hi There</h1>
                <div className="about__info-p1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <div className="about__info-p2">
                  
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
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
