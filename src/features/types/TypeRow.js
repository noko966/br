import React, { memo, useEffect, useState } from "react";
import { BET_RACE_TYPES } from "../../utils/constants";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
import { setPage, setTourneerDetails } from "../../slices/typesSlice";

const TypeRow = ({ details, typeName }) => {
  // TODO need to refactor this component
  const dispatch = useDispatch();
  let date = new Date(details.TED); //'Tue Aug 03 2022 16:21:55 GMT+0400 (Armenia Standard Time)'
  const [remainingTime, setRemainingTime] = useState(date - new Date());

  const goToTournament = () => {
    dispatch(setTourneerDetails(details));
    dispatch(setPage(1));
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime(date - new Date());
    }, 60000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div onClick={goToTournament} className="dg_br_race_block_item">
      <div className="dg_br_race_block_item_side">
        <div className="dg_br_race_block_item_side_inner">
          <span className="dg_br_race_block_item_side_inner_text">{details.N}</span>
          <span className="dg_br_race_block_item_side_inner_type">{BET_RACE_TYPES[details.P]}</span>
        </div>
      </div>
      <div className="dg_br_race_block_item_side">
        <div className="dg_br_race_block_item_side_date">
          {typeName !== "Upcoming" ? (
            // <span className="dg_br_race_block_item_side_date_text">21.03 - 24.05</span>
            <span className="dg_br_race_block_item_side_date_text">
              {dateFormat(details.TSD, "dd.mm")} - {dateFormat(details.TED, "dd.mm")}
            </span>
          ) : (
            <div className="dg_br_race_block_item_side_date_time">
              <div className="date_item">
                <span className="date_item_inner">{days} d</span>
                <span className="dg_br_separator">:</span>
                <span className="date_item_inner">{hours} h</span>
                <span className="dg_br_separator">:</span>
                <span className="date_item_inner">{minutes} m</span>
              </div>
            </div>
          )}
          {/* <span className="dg_br_race_block_item_side_date_text">21.03 - 24.05</span> */}
        </div>
      </div>
    </div>
  );
};

export default memo(TypeRow);
