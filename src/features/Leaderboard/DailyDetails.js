import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PlayersContainer from "./PlayersContainer";
import Card from "../../components/Card";
import { getDetails, getLiderboardDetails } from "../../slices/liderboardSlice";
import Calendar from "../../components/Calendar";
import { TOURNAMENT_TYPE } from "../../utils/constants";
import { translations } from "../../utils/helpers";

const DailyDetails = ({ calendarSelected = new Date(), calendarStartDate, calendarEndDate }) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date(calendarSelected));

  const { dailyPlayerDetails, dailyDetails, tourneerId } = useSelector(
    ({ leaderboard, types }) => ({
      tourneerId: types.tourneerId,
      dailyPlayerDetails: leaderboard.dailyPlayerDetails,
      dailyDetails: leaderboard.dailyDetails,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getLiderboardDetails(tourneerId));
    dispatch(getDetails(tourneerId));
  }, []);

  if (!dailyPlayerDetails || !dailyDetails) {
    return null;
  }

  // console.log(dailyDetails, dailyPlayerDetails, "dailyDetails and dailyPlayerDetails");

  // return <div>ghvfweghvfcgh</div>
  const onCalendarChange = (date) => {
    if (selectedDate?.setHours?.(0, 0, 0, 0) !== date?.setHours?.(0, 0, 0, 0)) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Calendar
        startDate={new Date(calendarStartDate)}
        endDate={new Date(calendarEndDate)}
        onChange={onCalendarChange}
        selectedDate={selectedDate}
      />
      <div className="dg_br_leaderboard_name_wrapper">
        <div className="dg_br_leaderboard_name_item">
          <span className="dg_br_leaderboard_name_item_inner"># ID</span>
        </div>
        <div className="dg_br_leaderboard_name_item">
          <span className="dg_br_leaderboard_name_item_inner">Prize Type</span>
        </div>
        <div className="dg_br_leaderboard_name_item">
          <span className="dg_br_leaderboard_name_item_inner">Prize</span>
        </div>
        <div className="dg_br_leaderboard_name_item">
          <span className="dg_br_leaderboard_name_item_inner">Points</span>
        </div>
      </div>
      <Card
        details={dailyDetails}
        // prizePlaces={dailyDetails.W}
        tournamentType={TOURNAMENT_TYPE.DAILY}
        typeName={translations.TOURNAMENT_DAILY_TOURNAMENT}
      >
        <PlayersContainer
          details={dailyPlayerDetails}
          // lottery={lottery}
          // fromMainPage={fromMainPage}
          // userInfo={dailyUserInfo}
          // dailyPrizePlaces={dailyPrizePlaces}
        />
      </Card>
    </>
  );
};

export default memo(DailyDetails);
