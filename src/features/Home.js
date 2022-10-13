import React from "react";
import Types from "./types/Types";
import DailyWinnerWrapper from "./main/DailyWinnerWrapper";

const Home = () => {
  return (
    <>
      <div className="dg_br_content">
        <div className="dg_br_head_content">
          <DailyWinnerWrapper />
        </div>
        <Types />
      </div>
    </>
  );
};

export default Home;
