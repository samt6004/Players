import React from "react";
import "./styles.css";
import team1 from "../imgs/team1.png";
import team2 from "../imgs/team2.png";

export default class Player extends React.Component {
  render() {
    return (
      <div
        className="player"
        onClick={e => {
          e.preventDefault();
        }}
      >
        {this.props.team === 1 ? (
          <img src={team1} alt="player1" height={50} width={50} />
        ) : (
          <img src={team2} alt="player2" height={50} width={50} />
        )}
        <input
          type="text"
          className="playerName"
          placeholder={"name"}
          id="playerName"
        />
      </div>
    );
  }
}
