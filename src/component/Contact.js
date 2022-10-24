import React from "react";
import { FaGitAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  const [state] = React.useState([
    { id: 1, heading: "Locate us", text: "New Colony, Khuda Lohara, CHD" },
    { id: 2, heading: "Give us a call", text: "+91 88948-71736" },
    { id: 3, heading: "Email", text: "milanparihar1234@gmail.com" },
  ]);
  return (
    <>
      <div className="contact">
        <div className="contact__header">
          <div className="container">
            <div className="common">
              <h4 className="heading">HAVE ANY QUERY ?</h4>
              <h1 className="mainHeader">Contact Me</h1>
              <p className="mainContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique culpa in reprehenderit obcaecati fuga, mollitia quos
                labore tempore veniam praesentium placeat perspiciatis facilis
                sint aut harum. Nisi, architecto quibusdam harum iusto aliquam
                illum.
              </p>

              <hr className="line" />
            </div>
            <div className="row">
              {state.map((info) => (
                <div className="col-4">
                  <div className="contact__box">
                    <div className="icon"></div>
                    <FaGitAlt className="icon" />
                    <div className="contact__box-header">{info.heading}</div>
                    <div className="contact__box-p">{info.text}</div>
                  </div>
                </div>
              ))}

              <div className="container">
                <div className="row">
                  <div>
                    <input
                      type="text"
                      className="col-6"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      className="col-6"
                      placeholder="Your Email"
                    />
                    <input
                      type="text"
                      className="col-12"
                      placeholder="Your Subject"
                    />
                    <textarea
                      type="text"
                      className="col-12"
                      placeholder="Your message"
                    />
                  <Link to="/Contact" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Send Message</Link>
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

export default Contact;
