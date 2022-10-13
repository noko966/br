import React from "react";
import ConditionItem from "./ConditionItem";
import { appConfig, getBetTypes, getEventTypes, getPointsFromType, translations } from "../../utils/helpers";
import { BET_TYPES } from "../../utils/constants";

const Conditions = ({ conditions }) => {
  if (!conditions) {
    return null;
  }
  const {
    globalSettings: { user },
  } = appConfig;

  const {
    PFT: pointsFromType,
    eventTypes,
    BT: betTypes,
    expressMinCount,
    MT: minOddTotal,
    OC: expressOddCounts,
    MA: minBetAmount,
    MAEB: minBetAmountForEachPoint,
  } = conditions;
  // console.log(Object.keys(conditions), 4444444444444)
  // console.log(pointsFromType, 'pointsFromType');

  return (
    <div className="dg_br_information">
      <ConditionItem name={"Points From"} condition={getPointsFromType({}, pointsFromType)} />
      {/*<ConditionItem name={"Event Type"} condition={getEventTypes({}, eventTypes)} />*/}
      <ConditionItem
        name={translations.MY_ACCOUNT_PAGE_TYPE_BETS}
        condition={BET_TYPES[betTypes]}
        // suffix={betTypes === 3 && `> ${expressMinCount}`}
        suffix={betTypes !== 1 && `>= ${expressOddCounts}`}
      />
      <ConditionItem name={"Min Odd"} condition={minOddTotal} suffix={translations.STF_TOTAL} />
      <ConditionItem name={"Min Bet Amount"} condition={minBetAmount} suffix={user.CurrencyShortName} />
      <ConditionItem name={"Min Bet Amount"} condition={minBetAmountForEachPoint} suffix={user.CurrencyShortName} />
    </div>
  );
};

export default Conditions;
