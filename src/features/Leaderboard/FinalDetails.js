import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PlayersContainer from "./PlayersContainer";
import Card from "../../components/Card";
import { getDetails, getLiderboardDetails } from "../../slices/liderboardSlice";
import { TOURNAMENT_TYPE } from "../../utils/constants";
import { translations } from "../../utils/helpers";

const FinalDetails = () => {
  const dispatch = useDispatch();
  const { finalPlayerDetails, finalDetails, tourneerId } = useSelector(
    ({ leaderboard, types }) => ({
      tourneerId: types.tourneerId,
      finalPlayerDetails: leaderboard.finalPlayerDetails,
      finalDetails: leaderboard.finalDetails,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getLiderboardDetails(tourneerId));
    dispatch(getDetails(tourneerId));
  }, []);

  if (!finalPlayerDetails || !finalDetails) {
    return null;
  }

  // console.log(finalDetails, finalPlayerDetails, "prizeDetails");
  // lottery={lottery}
  // tournamentType={translations.TOURNAMENT_DAILY_TOURNAMENT}
  // prizePlaces={finalPrizePlaces}
  // tournamentDate={`${translations.TOURNAMENT_ENDS} ${dateFormat(tournamentStart, 'hh:MM')}`}
  // gifts={gifts}

  return (
    <Card
      details={finalDetails}
      // prizePlaces={finalDetails.W}
      tournamentType={TOURNAMENT_TYPE.FINAL}
      typeName={translations.TOURNAMENT_MONTHLY_TOURNAMENT}
    >
      <PlayersContainer
        details={finalPlayerDetails}
        // lottery={lottery}
        // fromMainPage={fromMainPage}
        // userInfo={finalUserInfo}
        // finalPrizePlaces={finalPrizePlaces}
      />
    </Card>
  );
};

export default memo(FinalDetails);
