import React, { memo } from "react";
import { getPlayerPrizeType } from "../../utils/helpers";

const EachPlaceHeader = ({ detail }) => {
  // console.log(detail, 'detail winning amount');
  const { W: winners, A: winningAmount, PTYP: prizeType, GN: giftName, GI: giftIcon } = detail;

  return (
    <>
      <div className="dg_br_leaderboarditem_inner_head">
        <div className="dg_br_leaderboarditem_inner_head_inner">
          <i className="sport_front_icon-live-casino" />
          <span className="dg_br_leaderboarditem_inner_head_inner_winners_count">{winners.length}</span>
        </div>
        <span className="dg_br_leaderboarditem_inner_head_win_amount">{winningAmount}</span>
      </div>
      <div className="dg_br_leaderboarditem_inner_body">
        <div className="dg_br_leaderboarditem_inner_body_side">
          <span className="dg_br_leaderboarditem_inner_body_side_prize_text">Prize</span>
          <span className="dg_br_leaderboarditem_inner_body_side_prize">
            - {getPlayerPrizeType(prizeType, giftName)}
          </span>
        </div>
        <div className="dg_br_leaderboarditem_inner_body_side">
          {/*<span className="dg_br_leaderboarditem_inner_body_side_prize">{detail.winningAmount}</span>*/}
          <img src={`data:image/png;base64,${giftIcon}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default memo(EachPlaceHeader);
