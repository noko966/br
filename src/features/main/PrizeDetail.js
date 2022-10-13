import React from "react";
import { PaintPrizeType, translations } from "../../utils/helpers";
import { PRIZE_PERIODS } from "../../utils/constants";

const PrizeDetail = ({ details, period }) => {
  const prizePlaces = details.W;
  const prizeList = details.P;

  if (!prizeList.length) {
    return null;
  }

  return (
    <div className="dg_br_prize_block">
      <div className="dg_br_prize_block_inner">
        <div className="dg_br_prize_block_name">
          <i className="sport_front_icon-bonus_modern" />
          <span className="dg_br_prize_block_name_text">
            {PRIZE_PERIODS[period]} ({translations.AV_MARKETS_FST} {prizePlaces}):
          </span>
        </div>
        <div className="dg_br_prize_items">
          {prizeList.map((prize) => {
            return (
              <div key={prize.PId} className="dg_br_prize_item">
                {PaintPrizeType(prize)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrizeDetail;
