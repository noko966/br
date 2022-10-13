import React, { memo, useEffect, useState } from "react";
import EachPlayer from "./EachPlayer";
import { appConfig, getPlayerPrizeType } from "../../utils/helpers";
import cn from "classnames";
import EachPlaceHeader from "./EachPlaceHeader";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setCurrentUserData } from "../../slices/liderboardSlice";
import EachPlaceWithoutPlayers from "./EachPlaceWithoutPlayers";

const EachPlace = ({ detail }) => {
  const dispatch = useDispatch();
  const { A: winningAmount, W: winners, P: place, PTYP: prizeType, GN: giftName, GI: giftIcon } = detail;
  // console.log(detail, "detail");
  const showToggleArrow = winners.length > 1;
  const [isOpened, setIsOpened] = useState(false);
  let shownPlayers = winners;
  const { userPlace } = useSelector(
    ({ leaderboard }) => ({
      userPlace: leaderboard.userPlace,
    }),
    shallowEqual
  );
  const leaderboardItemCN = cn({
    dg_br_leaderboarditem: true,
    active: place === userPlace,
  });

  useEffect(() => {
    winners.map((player) => {
      if (player.IsC) {
        dispatch(
          setCurrentUserData({
            place: detail.P,
            winningAmount: detail.A,
          })
        );
      }
    });
  });

  const togglePlayers = () => {
    setIsOpened(!isOpened);
  };
  if (!isOpened && winners.length > 1) {
    shownPlayers = [];
  }

  const {
    globalSettings: { user },
  } = appConfig;

  return (
    <>
      <div className={leaderboardItemCN}>
        <div className="dg_br_leaderboarditem_place">
          <span className="dg_br_leaderboarditem_place_text">{place}</span>
        </div>
        <div className="dg_br_leaderboarditem_wrapper margin">
          {showToggleArrow && <EachPlaceHeader detail={detail} />}

          {winners.length ? (
            <>
              {shownPlayers.map((player, i) => (
                <EachPlayer
                  prizeType={getPlayerPrizeType(prizeType, giftName)}
                  key={i}
                  player={player}
                  giftIcon={giftIcon}
                />
              ))}
            </>
          ) : (
            <EachPlaceWithoutPlayers detail={detail} />
          )}

          {showToggleArrow && (
            <div className="dg_br_leaderboard_item_button_wrapper">
              <button onClick={togglePlayers} className={isOpened && "active"}>
                <i className="sport_front_icon-arrow-down" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="dg_br_leaderboarditem_web">
        <div className="dg_br_leaderboarditem_web_item">
          <div className="dg_br_leaderboarditem_web_inner">
            <div className="dg_br_leaderboarditem_web_inner without_width">
              <span className="dg_br_leaderboarditem_place">{place}</span>
              <span className="dg_br_leaderboarditem_web_inner_id">
                {winners.length === 1 ? (winners[0].IsC ? `Me - ${user.Id}` : `${winners[0].UId}`) : ""}
              </span>
              <div className="dg_br_leaderboarditem_inner_head_inner">
                <i className="sport_front_icon-live-casino" />
                <span className="dg_br_leaderboarditem_inner_head_inner_winners_count">{winners.length}</span>
              </div>
            </div>
          </div>
          <div className="dg_br_leaderboarditem_web_inner">{getPlayerPrizeType(prizeType, giftName)}</div>
          <div className="dg_br_leaderboarditem_web_inner">
            {winningAmount} {user.CurrencyShortName}
          </div>
          {/*TODO change winningAmount to Points*/}
          <div className="dg_br_leaderboarditem_web_inner prize">{winningAmount}</div>
        </div>

        {showToggleArrow && (
          <div className="dg_br_leaderboard_item_button_wrapper">
            <button onClick={togglePlayers} className={isOpened && "active"}>
              <i className="sport_front_icon-arrow-down" />
            </button>
          </div>
        )}
        {showToggleArrow &&
          winners.length &&
          shownPlayers.map((player, i) => (
            <div className="dg_br_leaderboarditem_web_item" key={i}>
              <div className="dg_br_leaderboarditem_web_inner">
                <div className="dg_br_leaderboarditem_web_inner without_width">
                  <span className="dg_br_leaderboarditem_web_inner_id">
                    {player.IsC ? `Me - ${user.Id}` : `${player.UId}`}
                  </span>
                  <div className="dg_br_leaderboarditem_inner_head_inner">
                    <span className="dg_br_leaderboarditem_inner_head_inner_winners_count" />
                  </div>
                </div>
              </div>
              <div className="dg_br_leaderboarditem_web_inner">{getPlayerPrizeType(player, giftName)}</div>
              <div className="dg_br_leaderboarditem_web_inner">
                {" "}
                {player.A} {user.CurrencyShortName}
              </div>
              {/*TODO change winningAmount to Points*/}
              <div className="dg_br_leaderboarditem_web_inner prize">{winningAmount}</div>
            </div>
          ))}
      </div>
      <div className="dg_br_row margin" />
    </>
  );
};
export default memo(EachPlace);
