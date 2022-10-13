import React from "react";
import PrizeDetail from "./PrizeDetail";
import dateFormat from "dateformat";
import { translations } from "../../utils/helpers";

const PrizeDetailWrapper = ({ prizeDetails, tourneerPeriod }) => {
  if (!prizeDetails) {
    return null;
  }
  let dailyPeriod = tourneerPeriod;
  let finalPeriod = tourneerPeriod;

  const startDate = prizeDetails.F.S;
  const endDate = prizeDetails.F.E;
  const dailyPrizeDetail = prizeDetails.D;
  const finalPrizeDetail = prizeDetails.F;

  if (tourneerPeriod === 3) {
    dailyPeriod = 1;
    finalPeriod = 2;
  }

  return (
    <div className="dg_br_side_content_race_info">
      {tourneerPeriod === 3 ? (
        <>
          <div className="dg_br_date_information_wrapper">
            <div className="dg_br_date_information">
              <span className="dg_br_date_text">Start date</span>
              <span className="dg_br_date">
                {dateFormat(startDate, "dd.mm")} {dateFormat(startDate, "hh:MM")}
              </span>
            </div>
            <span className="dg_br_separator">/</span>
            <div className="dg_br_date_information">
              <span className="dg_br_date_text">End date</span>
              <span className="dg_br_date">
                {dateFormat(endDate, "dd.mm")} {dateFormat(startDate, "hh:MM")}
              </span>
            </div>
          </div>
          <div className="dg_br_row" />
        </>
      ) : null}

      {dailyPrizeDetail.P.length ? <PrizeDetail period={dailyPeriod} details={dailyPrizeDetail} /> : null}
      {finalPrizeDetail.P.length ? <PrizeDetail period={finalPeriod} details={finalPrizeDetail} /> : null}
      {tourneerPeriod !== 3 ? (
        <div className="dg_br_date_information">
          <span className="dg_br_date_text">
            {translations.MY_ACCOUNT_BONUS_PAGE_START_DATE} {translations.DATE}
          </span>
          <span className="dg_br_date">
            {dateFormat(startDate, "dd.mm")} - {dateFormat(endDate, "dd.mm")}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default PrizeDetailWrapper;
