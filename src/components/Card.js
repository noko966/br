import React from "react";
import classNames from "classnames";
import { shallowEqual, useSelector } from "react-redux";
import dateFormat from "dateformat";
import { appConfig, translations } from "../utils/helpers";

const Card = ({ typeName, tournamentType, details, children }) => {
  const {
    globalSettings: { user },
  } = appConfig;

  const { userPlace, userWinningAmount } = useSelector(
    ({ leaderboard }) => ({
      userPlace: leaderboard.userPlace,
      userWinningAmount: leaderboard.userWinningAmount,
    }),
    shallowEqual
  );
  // console.log(details, "details");
  // console.log(user, 'user');
  // console.log(userWinningAmount, 'userWinningAmount');

  const { P: prizeList, E: endDate } = details;

  function isFinished(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  const dailyTournamentTime = new Date(endDate);
  const dailyEndHours = dailyTournamentTime.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const showTournamentDate =
    tournamentType === 0 && !isFinished(dailyTournamentTime)
      ? dailyEndHours
      : tournamentType === 0
      ? null
      : dateFormat(endDate, "dd.mm.yyyy");

  return (
    <div className="dg_br_leaderboard_block">
      <div className="dg_br_leaderboard_block_head">
        <div className="dg_br_leaderboard_block_head_side">
          <span className="dg_br_leaderboard_block_head_text">{typeName}</span>
          <span className="dg_br_leaderboard_block_head_time">
            {!isFinished(dailyTournamentTime) && "- ends"} {showTournamentDate}
          </span>
        </div>
        <div className="dg_br_leaderboard_block_head_side">
          <span className="dg_br_leaderboard_block_head_text">
            {isFinished(new Date(dateFormat(endDate, "yyyy-mm-dd"))) ? "Finished" : null}
          </span>
        </div>
      </div>

      <div className="dg_br_leaderboard_block_body">
        <div className="dg_br_leaderboard_block_body_prize_fund">
          <div className="dg_br_leaderboard_block_body_prize_name">
            <i className="sport_front_icon-bonus_modern" />
            <span className="dg_br_leaderboard_block_body_prize_name_text">
              {translations.TOURNAMENT_PRIZE_FUND} ({translations.AV_MARKETS_FST} {prizeList.length}):
            </span>
          </div>
          <div className="dg_br_leaderboard_block_body_fund">
            <div className="dg_br_leaderboard_block_body_fund_item">
              {prizeList.map((prize) => {
                const { PTYP: prizeType, GV: amount, GI: giftIcon, GN: giftName, PId: id } = prize;
                if (prizeType === 1 || prizeType === 3) {
                  return (
                    <span key={id} className="dg_br_leaderboard_block_body_fund_item_text">
                      {amount} {user.CurrencyShortName}
                    </span>
                  );
                } else if (prizeType === 2) {
                  return <img key={id} src={`data:image/png;base64,${giftIcon}`} alt="" />;
                }
              })}
            </div>
          </div>
        </div>

        {children}

        {
          <div className="dg_br_current_player">
            <div className="dg_br_current_player_side">
              <span className="dg_br_current_player_position">{userPlace}</span>
              <span className="dg_br_current_player_id">Me - {user.Id}</span>
            </div>
            <div className="dg_br_current_player_side">
              <span className="dg_br_current_player_win_amount">{userWinningAmount}</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Card;
