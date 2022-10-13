import cn from "classnames";
import React from "react";
import { appConfig } from "../utils/helpers";

const SportItem = (props) => {
  const {
    globalSettings: { partner },
  } = appConfig;

  const imageUrl = `https://${partner.CdnDomainName}/assets/background-sport/${props.Id}.png`;
  let sportImageDefaultSrc = `https://${partner.CdnDomainName}/assets/background-sport/200.png`;
  return (
    <div className="dg_bet_race_hero_with_image">
      <img src={imageUrl} alt="sport" onError={(e) => (e.target.src = sportImageDefaultSrc)} />
      <div>
        <span>{props.name}</span>
        <strong>All Leagues</strong>
      </div>
    </div>
  );
};

export default SportItem;
