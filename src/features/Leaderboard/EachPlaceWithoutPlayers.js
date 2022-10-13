import React from "react";
import { getPlayerPrizeType, PaintPrizeType } from "../../utils/helpers";

const EachPlaceWithoutPlayers = ({ detail }) => {
  const { PTYP: prizeType, GN: giftName } = detail;
  return (
    <div className="dg_br_leaderboarditem_inner">
      <div className="dg_br_leaderboarditem_inner_body">
        <div className="dg_br_leaderboarditem_inner_body_side">
          <span className="dg_br_leaderboarditem_inner_body_side_prize_text">
            {getPlayerPrizeType(prizeType, giftName)}
          </span>
        </div>
        <div className="dg_br_leaderboarditem_inner_body_side">{PaintPrizeType(detail)}</div>
      </div>
    </div>
  );
};

export default EachPlaceWithoutPlayers;
