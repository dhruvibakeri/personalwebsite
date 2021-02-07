import React from "react";
import { Link } from "react-router-dom";

export default class RobotBody extends React.Component {
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
        <h3 className="change-font-2">ROCK, PAPER, SCISSORS</h3>
        <footer className="text-large change-font-2 change-font-col">
          with a Robot
        </footer>
        <br />
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          This was a part of a class Project for the Embedded Design class at
          Northeastern. This project represents the very well known game of
          rock, paper and scissors. In this game, you (the user) makes use of
          the wiimote to play against the robotic arm in a game of rock, paper
          and scissors.
          <br />
          <br />
          When you run the program, the user is asked to input the number of
          games they want to play. After every game, the program prints out
          whether you won, you lost or if you tied, and at the end, outputs the
          total number of wins and losses.
          <br />
          <br />
          The game has been programmed such that the robotic arm makes its play
          the very second a button, representing “rock”, “paper” or “scissors”
          (on the wiimote) is pressed by the user. The “B”, “DOWN”, and “A”
          buttons represent “ROCK,” “PAPER,” and “SCISSORS,” respectively.
          <br />
          <br />
          We made the robotic arm do specific arm gestures for each option. For
          rock, The grippers open, and the arm moves up and down a few times
          about the elbow. For scissors, the grippers snap continuously. For
          paper, the arm stands up using the elbow as the pivot.
          <br />
          <br />
          This game also has a unique feature, in which the robotic arm, after a
          few rounds, attempts to predict the user’s next move. Each round, the
          user’s choice is recorded. After a few rounds have been played, the
          program will search for past instances of them playing their most
          recent three moves, and guess what they’ll play next. For example, if
          the user plays PAPER every round, the program will start playing
          SCISSORS every round, until the user switches tactics.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
