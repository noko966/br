import React from "react";
import { NAVIGATION_PAGES } from "../../utils/constants";
import { translations } from "../../utils/helpers";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import NavPages from "./NavPages";
import { setPage } from "../../slices/typesSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(
    ({ types }) => ({
      currentPage: types.currentPage,
    }),
    shallowEqual
  );

  const setActivePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="dg_br_side_tabs">
      <NavPages
        active={currentPage === NAVIGATION_PAGES.MAIN}
        page={NAVIGATION_PAGES.MAIN}
        setActivePage={setActivePage}
        text={translations.MAIN}
      />
      <NavPages
        active={currentPage === NAVIGATION_PAGES.LEADERBOARD}
        setActivePage={setActivePage}
        page={NAVIGATION_PAGES.LEADERBOARD}
        text={translations.TOURNAMENT_LEADERBOARD}
      />
    </div>
  );
};

export default Navigation;
