import React from "react";
import { translations } from "../../utils/helpers";

const DailyWinnerItem = ({ date, winAmount, currency }) => {
  return (
    <div className="dg_br_daily_winner_item">
      <div className="dg_br_daily_winner_item_side">
        <div className="dg_br_daily_winner_item_side_head">
          <span className="dg_br_daily_winner_item_side_head_text">{translations.TOURNAMENT_DAILY_WINNER}</span>
        </div>
        <div className="dg_br_daily_winner_item_side_body">
          <span className="dg_br_daily_winner_item_side_body_text date">{date}</span>
          <span className="dg_br_daily_winner_item_side_body_text ">Free bet</span>
        </div>
      </div>
      <div className="dg_br_daily_winner_item_side price">
        <div className="dg_br_winning_amount">
          <span className="dg_br_winning_amount_n">{winAmount}</span>
          <span className="dg_br_winning_amount_text">{currency}</span>
        </div>
      </div>
    </div>
  );
};

export default DailyWinnerItem;
