import React, { memo, useRef, useState } from "react";
import EachPlace from "./EachPlace";
import { translations } from "../../utils/helpers";

const PlayersContainer = ({ details, dailyPrizePlaces = 10 }) => {
  // const showToggleBtn = !fromMainPage && tournamentData.length > dailyPrizePlaces;
  const showToggleBtn = details.length > dailyPrizePlaces;
  const [isOpened, setIsOpened] = useState(false);
  let shownPlayers = details;
  const contentRef = useRef();

  // console.log(details, "details");

  const toggleShowAll = () => {
    setIsOpened(!isOpened);
    contentRef.current.scrollIntoView({ behavior: "smooth" }); // TODO
  };

  if (!isOpened) {
    shownPlayers = shownPlayers.slice(0, dailyPrizePlaces);
  }

  return (
    <div ref={contentRef} className="dg_br_leaderboard_block_body_items">
      {shownPlayers.map((detail, i) => (
        <EachPlace key={i} detail={detail} />
      ))}

      {showToggleBtn && (
        <div className="dg_br_showmore_button">
          <button type="button" onClick={toggleShowAll} className="dg_br_showmore_button_inner">
            {translations[isOpened ? "SHOW_LESS" : "SHOW_ALL"]}
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(PlayersContainer);
