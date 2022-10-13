import React from "react";
import { setPage, setTourneerId } from "../slices/typesSlice";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const { tourneerId, tourneerName } = useSelector(
    ({ types }) => ({
      tourneerId: types.tourneerId,
      tourneerName: types.tourneerName,
    }),
    shallowEqual
  );
  const goToHome = () => {
    dispatch(setPage(0));
    dispatch(setTourneerId(null));
  };

  return (
    <div className="dg_br_side_header">
      <div onClick={goToHome} className="dg_br_side_header_name">
        <button className="dg_br_side_header_back">
          <i className="sport_front_icon-arrow-down" />
        </button>
        <span className="dg_br_side_header_text">{tourneerId ? tourneerName : "Bet Race"}</span>
      </div>
    </div>
  );
};

export default Header;
