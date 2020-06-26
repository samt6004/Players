import React from "react";
import "./styles.css";
import Player from "./player";
import DraggableElement from "./draggableElement";

export default class Team extends React.Component {
  addPlayer = (name, team) => {
    const players = this.state.players;
    players.push({ name, team });
    this.setState({
      players
    });
  };

  displayPlayers = () => {
    return this.state.players.map(p => {
      return (
        <DraggableElement>
          render={<Player name={p.name} team={p.team} />}
        </DraggableElement>
      );
    });
  };

  render() {
    return <div className="team">{this.displayPlayers}</div>;
  }
}
