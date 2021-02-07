import React from "react";
import { Link } from "react-router-dom";
import remoteexe from "../../images/remoteexe.png";
import vueplay from "../../images/vueplay.mp4";

export default class FishRemBody extends React.Component {
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
        <h3 className="change-font-2">HEY! THAT'S MY FISH!</h3>
        <footer className="text-large change-font-2 change-font-col">
          Remote version - played by AI players
        </footer>
        <br />
        <div className="row">
          <div className="">
            <a
              href="https://github.com/dhruvibakeri/fishgame-remoteplayers"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-dark home-button">Github Repo</button>
            </a>
          </div>
        </div>
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          Hey! That's my Fish! - remote version is a software that runs a
          tournament for the Fish game which is played by a set of AI players
          and determines the winner. You can get some background on the game by
          looking at{" "}
          <a
            href="https://felleisen.org/matthias/4500-f20/fish.html"
            target="_blank"
            rel="noreferrer"
          >
            <u>this</u>
          </a>
          .
          <br />
          <br />
          This was part of a class project - you can find the project details{" "}
          <a
            href="https://felleisen.org/matthias/4500-f20/plan.html"
            target="_blank"
            rel="noreferrer"
          >
            <u>here</u>
          </a>
          . An important objective of this class was to teach us how to adapt
          easily to new teams and codebases. This was an inherited codebase
          which came with the game logic implemented. To that we added the
          remote part - server to host the tournament and allow clients to
          connect and play as AI players.
          <br />
          <br />
          Main language used was Typescript.We used the net module from nodejs
          for the server and client connections.
          <br />
          <br />
          Communication between the server and the client was based on a set of
          rules (message formats). The AI player should comply to these rules to
          be able to play the game successfully. Any player that goes against
          the rules or takes too long to take the next appropriate action gets
          kicked out of the tournament.
          <br />
          <br />
          As seen below, you can start up the tournament server by running the
          'xserver' executable, and then you can point the "AI players" to the
          server by running the 'xclients' executable. Once the tournament is
          over and we have a winner(s), the program will output a tuple - ['no.
          of winners', 'no. of players kicked out'].
          <br />
          <br />
          <img className="remote-image" src={remoteexe} alt=""></img>
          <br />
          <br />
          We also created a visualization of a single game being played by AI
          players using Vue.
          <br />
          <br />
          <video width="60%" height="auto" controls>
            <source src={vueplay} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
