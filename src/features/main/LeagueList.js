import React from "react";
import LeagueItem from "../../components/LeagueItem";

const LeagueList = ({ sports }) => {
  if (!sports) {
    return null;
  }

  return (
    <div className="dg_br_league_lists">
      {/* if only 1 item add class 'only' to dg_br_league_item div */}
      {sports.map((sport) => {
        const { N: name, Id, CL: champList } = sport;
        return (
          <div key={Id} className="dg_br_league">
            <p>{name}</p>
            <div className="dg_br_items">
              {champList.map((champ) => (
                <LeagueItem
                  key={champ.Key}
                  leagueId={champ.Key}
                  leagueName={champ.Value}
                  leaguesCount={champList.length}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeagueList;
