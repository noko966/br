import cn from "classnames";
import React from "react";

const LeagueItem = ({ champId, leagueName, leaguesCount }) => {
  const containerCn = cn({
    dg_br_league_item: true,
    [`sport-icon-${champId}`]: true,
    only: leaguesCount === 1,
  });
  return (
    <div className={containerCn}>
      <div className="dg_br_league_item_img">
        <i className="sport_front_icon-82" />
      </div>
      <span className="dg_br_league_item_block_league">{leagueName}</span>
    </div>
  );
};

export default LeagueItem;
