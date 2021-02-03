import React from "react";
import { Link } from "react-router-dom";

export default class PersWebBody extends React.Component {
  render() {
    return (
      <div className="child">
        <br />
        <div className="row" id="homebutton">
          <Link to="/">
            <button className="btn btn-lg button-right">
              <span className="lead">Home</span>
            </button>
          </Link>
        </div>
        <h3 className="change-font-2">PERSONAL WEBSITE</h3>
        <footer className="text-large change-font-2 change-font-col">
          made with ReactJS
        </footer>
        <br />
        <div className="row">
          <div className="col-sm-3">
            <a
              href="https://github.com/dhruvibakeri/personalwebsite"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-dark">Github Repo</button>
            </a>
          </div>
        </div>
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          This project served two purposes - creating a website for myself and
          playing around with ReactJS. I wanted to make a website where I could
          document my interests, hobbies and side projects. I also wanted to
          make a very efficient and flexible web page where future additions or
          deletions would be simple to do.
          <br />
          <br />
          <ul className="text-left">
            A few things I played around with / learnt while creating this
            website:
            <br />
            <br />
            <li>
              Responsiveness for devices with different screen sizes - achieved
              through CSS media constraints and bootstrap.
            </li>
            <li>
              Flexible design - each section automatically adjusts to the volume
              of it's content. This saves the additional code or CSS stying
              needed for different content and keeps the webpage looking
              uniform.
            </li>
            <li>
              Efficient design - made possible using React Components - As you
              can see, each section is essentially a box with a border and
              content lies within that border. Any future section additions
              would just be a new React Component with the appropriate CSS
              class. The cards that you see in the Projects and Recipes section,
              are also a React Component. They take in the picture,link and
              hover action as props and because of that you can keep using the
              card components for different types of content.{" "}
            </li>
            <li>
              Some other minor details:
              <ul>
                <li>Routing with the react-router-dom package</li>
                <li>
                  Showing the top of the page when user navigates to that page
                  through the website but showing previous scroll bar position
                  when user goes back/forward using the browser back/forward
                  buttons.
                </li>
              </ul>
            </li>
          </ul>
          <br />
        </div>
      </div>
    );
  }
}
