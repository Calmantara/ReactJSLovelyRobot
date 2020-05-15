import React from "react";
import "./card.style.css";

export const Card = props => {
  return (
    <div className="card">
      <img
        alt={props.monster.username}
        src={`https://robohash.org/${props.monster.username}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
