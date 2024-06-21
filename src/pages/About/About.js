import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/029/711/176/small_2x/developer-with-ai-generated-free-png.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                MD Israr Ahmed is a skilled React Developer with 3 years of
                experience. Proficient in React, JavaScript, HTML, CSS,
                Bootstrap, Node.js, Express.js, and MongoDB, he excels in
                crafting dynamic web applications. Israr's expertise lies in
                creating scalable, efficient solutions while adhering to best
                practices. With strong problem-solving abilities and a
                commitment to staying updated with industry trends, he
                consistently delivers high-quality work. I am collaborative
                nature and dedication to excellence make him a valuable asset to
                any development team, poised for continued success in his
                career.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
