import React from "react";
import { Link } from "react-router-dom";
import gamecoly from "../../images/fishcolygame.png";
import hole1 from "../../images/holes1.png";
import hole2 from "../../images/holes2.png";
import hole3 from "../../images/holes3.png";
import score from "../../images/score.png";
import logbox from "../../images/logbox.png";

export default class FishColyBody extends React.Component {
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
          A two player game created with Colyseus
        </footer>
        <br />
        <div className="row">
          <div className="col-sm-3">
            <a
              href="https://github.com/dhruvibakeri/fishgame-colyseus"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-dark">Github Repo</button>
            </a>
          </div>
          <div className="col-sm-8">
            <a
              href="https://heythatsmyfish.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-dark float-right">Play Game</button>
            </a>
          </div>
        </div>
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          Hey! That's my Fish! is an online two-player game inspired by the
          board game{" "}
          <a
            href="https://www.fantasyflightgames.com/en/products/hey-thats-my-fish/"
            target="_blank"
            rel="noreferrer"
          >
            <u>"Hey! That's my Fish!"</u>
          </a>
          .
          <br />
          <br />
          This was initially a class project which turned into a personal
          project. For my class, I together with my project partner had to
          create the logical components of this game, and later on be able to
          run a tournament for this game with a set of AI players.
          <br />
          <br />
          In addition to that, we wanted to create a way for humans to be able
          to play this game as well so we developed a web app hosted on Heroku
          where this game is available. Technologies used are TypeScript as the
          main language,{" "}
          <a href="https://colyseus.io/" target="_blank" rel="noreferrer">
            <u>Colyseus</u>
          </a>{" "}
          for networking, and{" "}
          <a href="http://fabricjs.com/" target="_blank" rel="noreferrer">
            <u>FabricJS</u>
          </a>{" "}
          for the graphics.
        </div>
        <div>
          <img className="game-image" src={gamecoly} alt=""></img>
        </div>

        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          The game board is a grid of hexagonal tiles, each of which displays a
          positive number of fish. The player avatars come in the shape of
          penguins, which of course eat fish.The goal of the game is to collect
          as many fish as possible. At the beginning of the game, the players
          place their penguins on the board one-at-a-time. Once all penguins are
          placed, the game starts. During a turn, a player must move one of its
          penguins across a boundary (not a corner) of hexagons. The 'grey'
          tiles are holes - players cannot move their penguins past those nor
          can they place them on the holes. The tile on which the penguin rested
          gets removed (becomes a hole) from the board and its fish go into the
          possession of that penguin’s player. A player that cannot move any of
          its penguins is skipped. The game ends when no player can move a
          penguin.
          <br />
          <br />
          Colyseus is a multiplayer game framework for nodeJS. It basically
          takes care of the networking and the game state synchronization, so
          you can focus on the logistics of the game without worrying about the
          networking. It uses the concept of game rooms to which the client
          would connect to and be able to play a game. This is a two player
          game, so once two clients have been assigned a room, the third client
          trying to join will be connected to a different game room and play a
          different game.
        </div>
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          <h3 className="text-left">Game Features:</h3>
          <ul className="text-left text-medium">
            <li>Randomized Board :</li>
            <p>
              Each game has a different board, with holes on random places and
              different arrangement of fishes. <br />
              <br />
              <div className="same-line-elements">
                <img className="hole-image" src={hole1} alt=""></img>
                <img className="hole-image" src={hole2} alt=""></img>
                <img className="hole-image" src={hole3} alt=""></img>
              </div>
            </p>
            <li>Score Board :</li>
            <p>
              A Score Board that keeps track of the score and highlights the
              player whose turn it currently is. <br />
              <br />
              <div className="same-line-elements">
                <img className="score-image" src={score} alt=""></img>
              </div>
            </p>
            <li>Log Box / Notification Box :</li>
            <p>
              Notifies the players when a player joins the game, a player places
              a penguin, a player makes a move, a player's turn is skipped, a
              player makes an illegal move/placement and when a game is over.{" "}
              <br />
              <br />
              <div className="same-line-elements">
                <img className="logbox-image" src={logbox} alt=""></img>
              </div>
            </p>
          </ul>
        </div>
        <br />
      </div>
    );
  }
}
