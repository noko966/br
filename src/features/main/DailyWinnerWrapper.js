import React, { useEffect } from "react";
import DailyWinnerItem from "./DailyWinnerItem";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getWinningBetRaces } from "../../slices/commonSlice";
import dateFormat from "dateformat";
import { appConfig } from "../../utils/helpers";

const DailyWinnerWrapper = () => {
  const dispatch = useDispatch();
  const {
    globalSettings: { user },
  } = appConfig;

  const { winningBetRaces } = useSelector(
    ({ common }) => ({
      winningBetRaces: common.winningBetRaces,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getWinningBetRaces(user.Id));
  }, []);

  if (!winningBetRaces) {
    return null;
  }

  // console.log(winningBetRaces, '34343');

  return (
    <div className="dg_br_daily_winner_block">
      {winningBetRaces.map((WBR, i) => {
        return <DailyWinnerItem key={i} date={dateFormat(WBR.D, "dd.mm.yyyy")} winAmount={WBR.A} currency={WBR.CN} />;
      })}
    </div>
  );
};

export default DailyWinnerWrapper;
