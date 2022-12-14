import React from "react";
import "../App.css";
// import { CgWebsite, SiTryhackme, FaGitAlt, ImFileVideo, HiOutlineComputerDesktop ,ImProfile} from 'react-icons/fa';
import { FaGitAlt } from "react-icons/fa";

function Service() {
  const [header] = React.useState({
    title: "SERVICE",
    subtitle: "My Service",
    text: "Lorem Ipsum is simply dummy text of the printing and  types industry. dummy text ever since the 1500s, when an unk Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, eius. Provident, esse iure enim perferendis soluta pariatur repudiandae sapiente at suscipit ab molestias quis illum alias perspiciatis nesciunt quibusdam aspernatur?",
  });

  const [state] = React.useState([
    {
      id: 1,
      icon: "CgWebsite",
      heading: "Web Developer",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and  types industry .",
    },

    {
      id: 2,
      icon: "ImFileVideo",
      heading: "Video Editor",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and  types industry.",
    },

    {
      id: 3,
      icon: "FaGitAlt",
      heading: "Git Hub",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and  types industry.",
    },

    {
      id: 4,
      icon: "SiTryhackme",
      heading: "Hacking",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and  types industry.",
    },

    {
      id: 5,
      icon: "DiPhotoshop",
      heading: "Photo Editor",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and  types industry.",
    },

    {
      id: 6,
      icon: "ImProfile",
      heading: "Resume Maker",
      text2:
        "Lorem Ipsum is simply dummy  text of the printing and  types industry.",
    },
  ]);
  return (
    <>
      <div className="service" id="service12">
        <div className="col">
          <div className="contact__header">
            <div className="container">
              <div className="common">
                <h3 className=" mainHeader">{header.title} <span></span></h3>
                <h1 className="heading">
                  {header.subtitle}
                  
                </h1>
                <p className="mainContent">{header.text}</p>
              </div>

              <p>
                <span></span>
              </p>

              <div className="row-1">
                {state.map((info) => (
                  <div className="col-4">
                    <div className="contact__box">
                      <FaGitAlt className="icon" />
                      <div className="contact__box-header">{info.heading}</div>
                      <div className="contact__box-p">{info.text2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
