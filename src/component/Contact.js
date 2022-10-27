import emailjs from "emailjs-com";
import React from "react";
import { FaGitAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import "../App.css";
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5pkavwr",
        "template_5r41yvc",
        form.current,
        "s6a_r-Ru7Xy2tTcVo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  const [state] = React.useState([
    { id: 1, heading: "Locate us", text: "New Colony, Khuda Lohara, CHD" },
    { id: 2, heading: "Give us a call", text: "+91 88948-71736" },
    { id: 3, heading: "Email", text: "milanparihar1234@gmail.com" },
  ]);
  return (
    <>
      <div className="contact" id="contact12">
        <div className="contact__header">
          <div className="container">
            <div className="common">
              <h1 className="mainHeader">Contact Me  <span></span></h1>
              <h4 className="heading">HAVE ANY QUERY ? </h4>
              <p className="mainContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique culpa in reprehenderit obcaecati fuga, mollitia quos
                labore tempore veniam praesentium placeat perspiciatis facilis
                sint aut harum. Nisi, architecto quibusdam harum iusto aliquam
                illum.
              </p>
              <p>
                <span></span>
              </p>

            </div>
            <div className="row-1">
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

              <form className="container" ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="details">
                    <input
                      type="text"
                      name="name"
                      className="col-6 inp"
                      placeholder="Your Name"
                    />
                    <input
                      type="tel"
                      name="phone"
                      className="col-6 inp"
                      placeholder="Phone No."
                    />
                    <input
                      type="text"
                      name="subject"
                      className="col-12 inp"
                      placeholder="Your Subject"
                    />
                    <input
                      type="text"
                      name="email"
                      className="col-12  inp"
                      placeholder="Your Email"
                    />
                    <textarea
                      type="text"
                      name="message"
                      className="col-12 inp"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn"
                  tabIndex="-1"
                  role="button"
                  aria-disabled="true"
                >
                  Send{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
