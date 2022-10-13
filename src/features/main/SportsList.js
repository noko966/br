import React from "react";
import SportItem from "../../components/SportItem";

const SportsList = ({ sports }) => {
  // console.log(sports, 'sports');

  return (
    <div className="dg_br_sports_lists">
      {sports.map((sport) => {
        return <SportItem key={sport.Id} sport={sport} />;
      })}
    </div>
  );
};

export default SportsList;
