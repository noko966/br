import React, { useEffect, useState } from "react";
import Tabs from "../../components/Tabs";
import { PERIOD_TYPES } from "../../utils/constants";
import DailyDetails from "./DailyDetails";
import FinalDetails from "./FinalDetails";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Navigation from "../navigation/Navigation";
import { isMobile, translations } from "../../utils/helpers";
import { getDetails, getLiderboardDetails } from "../../slices/liderboardSlice";
import Tab from "../../components/Tab";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { prizeDetails, tourneerId, tourneerPeriod } = useSelector(
    ({ main, types }) => ({
      tourneerId: types.tourneerId,
      tourneerPeriod: types.tourneerPeriod,
      prizeDetails: main.prizeDetails,
    }),
    shallowEqual
  );

  // console.log(tourneerPeriod, 'tourneerPeriod');

  const [tournamentPeriod, setTournamentPeriod] = useState(PERIOD_TYPES.DAILY);

  useEffect(() => {
    if (tourneerPeriod === 2) {
      setTournamentPeriod(PERIOD_TYPES.FINAL);
    }
    dispatch(getDetails(tourneerId));
    dispatch(getLiderboardDetails(tourneerId));
  }, []);

  if (!prizeDetails) {
    return null;
  }

  // console.log(prizeDetails, "prizeDetails");

  return (
    <>
      {isMobile() && <Navigation />}

      <div className="dg_br_leaderBoard">
        {tourneerPeriod === 3 ? (
          <Tabs className="dg_br_leaderBoard_tabs">
            <Tab
              active={tournamentPeriod === PERIOD_TYPES.DAILY}
              text={translations.TOURNAMENT_DAILY_WINNERS}
              changeTab={() => setTournamentPeriod(PERIOD_TYPES.DAILY)}
            />
            <Tab
              active={tournamentPeriod === PERIOD_TYPES.FINAL}
              text={translations.CONTEST_FINAL}
              changeTab={() => setTournamentPeriod(PERIOD_TYPES.FINAL)}
            />
          </Tabs>
        ) : null}

        {tournamentPeriod === PERIOD_TYPES.DAILY && (
          <DailyDetails calendarStartDate={prizeDetails.F.S} calendarEndDate={prizeDetails.F.E} />
        )}
        {tournamentPeriod === PERIOD_TYPES.FINAL && <FinalDetails />}
      </div>
    </>
  );
};

export default Leaderboard;
