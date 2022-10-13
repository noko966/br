import React from "react";
import SportsList from "./SportsList";
import LeagueList from "./LeagueList";
import { translations } from "../../utils/helpers";

const BetRaceDataTypeWrapper = ({ betRaceType, sports }) => {
  // console.log(sports, "sports");
  // console.log(betRaceType, "betRaceType");

  if (betRaceType === 1) {
    return null;
  }

  const paintSports = () => {
    switch (betRaceType) {
      case 2:
        return <SportsList sports={sports} />;
      case 3:
        return <LeagueList sports={sports} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="dg_br_head_wrapper">
        <span className="row" />
        <span className="dg_br_head_wrapper_text">{translations.PS_SPORTS}</span>
        <span className="row" />
      </div>
      {paintSports()}
    </>
  );

  // 1. All sports
  // 2. All championships in sport
  // 3. Championships
};

export default BetRaceDataTypeWrapper;
