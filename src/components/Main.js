import React, { Component } from "react";
import "../CSS/App.css";
import "../CSS/Main.css";
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import Accomplishment from "./Accomplishment";
import resume from "../LucasHarveyResume.pdf";
import partyfinder from "../Images/partyfinder.png";
import nexchange from "../Images/nexchange.png";
import facebook from "../Images/facebook.png";
import bloomberg from "../Images/bloomberg.png";
import wayfair from "../Images/wayfair.png";
import intellisports from "../Images/intellisports.png";
import stock_trend from "../Images/stock_trend.png";
import reachmoreonline from "../Images/reachmoreonline.png";
import visionlock from "../Images/vision-lock.png";
import climotion from "../Images/cli-motion.png";
import graphgen from "../Images/graph-gen.png";
import githubBlack from "../Images/github-black.png";
import linkedinBlue from "../Images/linkedin-blue.png";
import round_headshot from "../Images/round_me.png";
import ReactGA from "react-ga";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <a id="about-me" className="anchor" />
        <div className="about-me-section">
          <div className="about-me section off-white">
            <h2 className="sectionTitle">
              <span>Get to know me</span>
            </h2>
            <img
              className="round-headshot"
              src={round_headshot}
              alt="Lucas Harvey"
            />
            <p>
              Studying <span>Computer Science</span> at the{" "}
              <span>University of Waterloo</span>
              <br />
              From: <span>Montreal</span>, Canada
              <br />
              Passion: <span>Entrepreneurship</span>
              <br />
              Current project: <span>Salesboost Shopify Upsell App</span>
              <br />
              Open to internship opportunities starting in{" "}
              <span>January 2022</span>
            </p>
            <ScrollAnimation animateIn="fadeInButton" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                href={resume}
                onClick={() =>
                  ReactGA.event({
                    category: "Button Click",
                    action: "User clicked on View Resume",
                  })
                }
              >
                View Resume
              </a>
            </ScrollAnimation>
          </div>
        </div>
        <a id="skills" className="anchor" />
        <div>
          <div className="section">
            <h2 className="sectionTitle">
              <span>This is what I know</span>
            </h2>
            <div className="sectionContsent">
              <p>
                <span className="section-subtitle">
                  <nobr>I am fluent in: </nobr>
                </span>
                <span> Python </span>
                <span className="element"> JavaScript </span>
                <span className="element"> SQL </span>
                <span className="element"> GraphQL </span>
                <span className="element"> PHP </span>
                <span className="element"> C/C++/Objective-C </span>
                <span className="element"> HTML </span>
                <span className="element"> CSS </span>
              </p>
              <p>
                <span className="section-subtitle">
                  <nobr>I have worked with: </nobr>
                </span>
                <span> Node.js </span>
                <span className="element"> Flask </span>
                <span className="element"> MongoDB </span>
                <span className="element"> Git </span>
                <span className="element"> React </span>
                <span className="element"> React Native </span>
                <span className="element"> XCode </span>
                <span className="element"> Pandas </span>
                <span className="element"> Scikit-Learn </span>
                <span className="element"> Airflow </span>
                <span className="element"> Hive </span>
              </p>
            </div>
          </div>
        </div>
        <a id="work" className="anchor" />
        <div>
          <div className="section accomplishments merged-top off-white">
            <h2 className="sectionTitle">
              <span>Work Experience</span>
            </h2>
            <Accomplishment
              link="https://www.facebook.com/"
              image={facebook}
              alt="Facebook logo"
              title="Facebook"
              subtitle1="Software Engineer Intern"
              subtitle2="Menlo Park, CA"
              description="Currently working on the Instagram Rooms team and adding real-time captioning and translations to Instagram Video Calling. Previously added Hashtags to IG Rooms to increase visibility of Rooms throughout IG."
            />
            <Accomplishment
              link="https://www.bloomberg.net/"
              image={bloomberg}
              alt="Bloomberg logo"
              title="Bloomberg"
              subtitle1="Software Engineer Intern"
              subtitle2="New York City, NY"
              description="Worked with the Assets and Investments Trade Management team to create a recommender system for post-trade automation flows."
            />
            <Accomplishment
              link="https://www.wayfair.com/"
              image={wayfair}
              alt="Wayfair logo"
              title="Wayfair"
              subtitle1="Software Engineer Intern"
              subtitle2="Boston, MA"
              description="Worked with the Machine Learning Platforms team to improve the performance of large-scale machine learning applications. Spearheaded the development of a microservice for the creation of ML models, features and datasets."
            />
            <Accomplishment
              link="https://www.intellisports.ca/"
              image={intellisports}
              alt="Intellisports logo"
              title="Intellisports"
              subtitle1="Full Stack Developer Intern"
              subtitle2="Montreal, QC"
              description="Developed the Playfitt Mobile App by adding new gamification features to increase user retention. Was responsible for the development of a leveling up
              feature to incentivize long-term user engagement."
            />
            <Accomplishment
              link="https://www.intellisports.ca/"
              image={intellisports}
              alt="Intellisports logo"
              title="Intellisports"
              subtitle1="Research Intern"
              subtitle2="Montreal, QC"
              description="Automated the data analysis of large data sets 
                    of sensor data using linear regression in R Studio and discovered new findings regarding the motion of the 
                      curling stone never observed in the research community."
            />
          </div>
        </div>
        <a id="projects" className="anchor" />
        <div>
          <div className="section accomplishments merged-bottom off-white animatedParent">
            <h2 className="sectionTitle">
              <span>Projects</span>
            </h2>
            <Accomplishment
              link="https://github.com/LucasHarvey/StockTrend/"
              image={stock_trend}
              alt="StockTrend logo"
              title="StockTrend"
              subtitle1="Python, sklearn, pandas"
              description="StockTrend uses fundamental data about companies (P/E ratio, D/E ratio, etc.) and machine learning to predict whether a company will outperform or underperform the S&P 500."
            />
            <Accomplishment
              link="https://reachmoreonline.com"
              image={reachmoreonline}
              alt="ReachMoreOnline logo"
              title="ReachMoreOnline"
              subtitle1="Shopify, React, Heroku"
              description="ReachMoreOnline is an e-commerce agency that helps small businesses transition to online sales. Faced with the physical limitations of the pandemic, we set out to help small business thrive by selling their products online."
            />
            <Accomplishment
              link="https://lucasharvey.github.io/partyfinder-website/"
              image={partyfinder}
              alt="Partyfinder logo"
              title="PartyFinder"
              subtitle1="Developer and Co-Founder"
              subtitle2="Waterloo, ON"
              description="PartyFinder is a crowdsourced mobile app built in React Native that allows you to spot and discover parties and events near you.
              Amassed 5,000+ downloads and 1,000 Weekly Active Users."
            />
            <Accomplishment
              link="https://www.youtube.com/watch?v=lnMbYg0ked8"
              image={visionlock}
              alt="VisionLock logo"
              title="VisionLock"
              subtitle1="Python, OpenCV, Dlib"
              subtitle2=""
              description="Developed a home security system capable of performing facial recognition, unlocking a door and greeting the resident with text to speech conversion."
            />
            <Accomplishment
              link="https://devpost.com/software/gitleap"
              image={climotion}
              alt="CLIMotion logo"
              title="CLIMotion"
              subtitle1="Hack the North 2018"
              subtitle2="JavaScript, Shell"
              description="Created the user interface for a project involving computer vision which allows users to interact with the command line using physical gestures."
            />
            <Accomplishment
              link="https://lucasharvey.github.io/nexchange-website/"
              image={nexchange}
              alt="Nexchange logo"
              title="Nexchange"
              subtitle1="Lead Developer and Founder"
              subtitle2="Montreal, QC"
              description="Founded a web-based mobile-friendly service that 
                    supports students with learning difficulties by providing them with class notes and saves 
                    an average of 15 hours per week of manual labour."
            />
            <Accomplishment
              link="https://github.com/LucasHarvey/GraphGEN"
              image={graphgen}
              alt="GraphGEN logo"
              title="GraphGEN"
              subtitle1="JavaScript, HTML, CSS"
              subtitle2=""
              description="Developed a web-based mathematical graphing application capable of plotting points, drawing functions and determining the best linear fit for a given data set."
            />
          </div>
        </div>
        <div className="section">
          <h2 className="sectionTitle">
            <span>Let's connect</span>
          </h2>
          <div className="connections">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/lucas-harvey/"
              >
                <img alt="LinkedIn logo" src={linkedinBlue} />
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucasHarvey"
              >
                <img alt="GitHub logo" src={githubBlack} />
              </a>
            </ScrollAnimation>
          </div>
          <p>
            Or, shoot me an email at{" "}
            <a
              className="email"
              href="mailto:lucas.harvey10@gmail.com"
              target="_top"
            >
              lucas.harvey10@gmail.com
            </a>
          </p>
          <Link
            to="/#about-me"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Back to top
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
