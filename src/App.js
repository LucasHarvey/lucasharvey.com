import React, { Component } from "react";
import "./CSS/App.css";
import resume from "./LucasHarveyResume.pdf";
import resumeIcon from "./Images/resume.png";
import githubIcon from "./Images/github.png";
import linkedinIcon from "./Images/linkedin.png";
import emailIcon from "./Images/email.png";
import { HashLink as Link } from "react-router-hash-link";
import Routing from "./components/Routing.js";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header" className="App-header">
          <div className="contact">
            <a target="_blank" rel="noopener noreferrer" href={resume}>
              <img alt="resume icon" src={resumeIcon} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucasHarvey"
            >
              <img alt="GitHub logo" src={githubIcon} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/lucas-harvey/"
            >
              <img alt="LinkedIn logo" src={linkedinIcon} />
            </a>
            <a href="mailto:lucas.harvey@uwaterloo.ca" target="_top">
              <img alt="email icon" src={emailIcon} />
            </a>
          </div>
        </header>
        <div className="navbar">
          <Link
            to="/#about-me"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            ABOUT ME
          </Link>
          <Link
            to="/#skills"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            SKILLS
          </Link>
          <Link
            to="/#work"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            WORK
          </Link>
          <Link
            to="/#projects"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            PROJECTS
          </Link>
        </div>
        <Routing />
      </div>
    );
  }
}

export default App;