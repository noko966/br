import React, { memo } from "react";
import { appConfig } from "../../utils/helpers";

const EachPlayer = ({ player, prizeType, giftIcon }) => {
  // console.log(player, 'player');
  const { A: winningAmount, UId: userId } = player;
  const {
    globalSettings: { user },
  } = appConfig;

  return (
    <div className="dg_br_leaderboarditem_inner">
      <div className="dg_br_leaderboarditem_inner_head">
        <span className="dg_br_leaderboarditem_inner_head_text">{player.IsC ? `Me - ${user.Id}` : `${userId}`}</span>
      </div>
      <div className="dg_br_leaderboarditem_inner_body">
        <div className="dg_br_leaderboarditem_inner_body_side">
          <span className="dg_br_leaderboarditem_inner_body_side_prize_text">Prize</span>
          <span className="dg_br_leaderboarditem_inner_body_side_prize">- {prizeType}</span>
        </div>
        <div className="dg_br_leaderboarditem_inner_body_side">
          <span className="dg_br_leaderboarditem_inner_body_side_prize prize_color">{winningAmount}</span>
          {/*<img src={`data:image/png;base64,${giftIcon}`} />*/}
        </div>
      </div>
    </div>
  );
};

export default memo(EachPlayer);
