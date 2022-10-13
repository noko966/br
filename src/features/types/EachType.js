import React from "react";
import TypeRow from "./TypeRow";

const EachType = ({ type, name }) => {
  if (!type.length) {
    return null;
  }

  // console.log(type, 'type');

  return (
    <div className="dg_br_race_block">
      <div className="dg_br_race_block_head">
        <i className="sport_front_icon-bet_history"></i>
        <span className="dg_br_race_block_head_text">{name}</span>
      </div>
      <div className="dg_br_race_block_items">
        {type.map((details) => (
          <TypeRow typeName={name} key={details.TID} details={details} />
        ))}
      </div>
    </div>
  );
};

export default EachType;
