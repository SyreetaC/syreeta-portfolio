import React from "react";
import "./Projects.css";

import geoLink from "../../images/Geo-link.png";
import veganPals from "../../images/vegan-pals.png";
import passwordGenerator from "../../images/password.jpg";
import codeQuiz from "../../images/quiz.jpg";
import weatherDashboard from "../../images/weather.jpg";

const ProjectCard = (props) => {
  const projectArray = [
    {
      title: "Geo Link!",
      info: "A web application designed to make searching for things to do in a city much easier!",
      gitHub: "https://github.com/SyreetaC/geo-link",
      link: "https://syreetac.github.io/geo-link/",
      image: geoLink,
    },
    {
      title: "Vegan Pals",
      info: "An MVC application connecting vegans through recipes.",
      gitHub: "https://github.com/SyreetaC/vegan-pals",
      link: "https://stormy-stream-13655.herokuapp.com/",
      image: veganPals,
    },
    {
      title: "Password Generator",
      info: "An application to create a random password, including special characters, numbers and letters.",
      gitHub: "https://github.com/SyreetaC/Password-generator",
      link: "https://syreetac.github.io/Password-generator/",
      image: passwordGenerator,
    },
    {
      title: "Code Quiz",
      info: "Created a code quiz using HTML, CSS and javaScript.",
      gitHub: "https://github.com/SyreetaC/code-quiz",
      link: "https://syreetac.github.io/code-quiz/",
      image: codeQuiz,
    },
    {
      title: "Weather dashboard",
      info: "An application used to search for the current and 5-day weather forecast in cities.",
      gitHub: "https://github.com/SyreetaC/weather-dashboard",
      link: "https://syreetac.github.io/weather-dashboard/",
      image: weatherDashboard,
    },
  ];
  return (
    <div className="card-container">
      {projectArray.map((project) => (
        <div className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h5 className="card-title">{project.title}</h5>
            </div>
          </div>
          <img className="card-image" src={project.image} alt="Logo" />
          <div className="card-text">{project.info}</div>
          <button className="project-btn">Link to application</button>
          <button className="project-btn">Link to GitHub</button>
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
