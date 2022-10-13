import React, { useEffect } from "react";
import PrizeDetailWrapper from "./PrizeDetailWrapper";
import Conditions from "./Conditions";
import BetRaceDataTypeWrapper from "./BetRaceDataTypeWrapper";
import Navigation from "../navigation/Navigation";
import { getBetRaceDetails } from "../../slices/mainSlice";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isMobile } from "../../utils/helpers";

const Main = () => {
  const dispatch = useDispatch();
  const { prizeDetails, conditions, sports, tourneerId, betRaceType, tourneerPeriod } = useSelector(
    ({ main, types }) => ({
      tourneerId: types.tourneerId,
      tourneerPeriod: types.tourneerPeriod,
      prizeDetails: main.prizeDetails,
      conditions: main.conditions,
      sports: main.sports,
      betRaceType: main.betRaceType,
    }),
    shallowEqual
  );

  // console.log(prizeDetails, 'prizeDetails');

  useEffect(() => {
    dispatch(getBetRaceDetails(tourneerId));
  }, [tourneerId]);

  return (
    <>
      {isMobile() && <Navigation />}
      <PrizeDetailWrapper prizeDetails={prizeDetails} tourneerPeriod={tourneerPeriod} />
      <Conditions conditions={conditions} />
      <BetRaceDataTypeWrapper betRaceType={betRaceType} sports={sports} />
    </>
  );
};

export default Main;
