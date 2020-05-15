import React from "react";

import { Card } from "../card/card.component.jsx";
import "./card-list.style.css";

export const CardList = props => {
  let searchedMonster = props.monsters.filter(monster =>
    monster.name.toLowerCase().includes(props.searchField.toLowerCase())
  );
  return (
    <div className="card-list">
      {searchedMonster.map(monster => (
        <div key={monster.id}>
          <Card monster={monster} />
        </div>
      ))}
    </div>
  );
};

//https://robohash.org/calman?set=set2
