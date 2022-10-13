import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import Home from "./Home";
import Main from "./main/Main";
import Leaderboard from "./leaderboard/Leaderboard";

const PagesWrapper = () => {
  const { tourneerId, currentPage } = useSelector(
    ({ types }) => ({
      tourneerId: types.tourneerId,
      currentPage: types.currentPage,
    }),
    shallowEqual
  );

  const paintPage = () => {
    switch (currentPage) {
      case 0:
        return <Home />;
      case 1:
        return <Main />;
      case 2:
        return <Leaderboard />;
      default:
        return null;
    }
  };

  return paintPage();
};

export default PagesWrapper;