import React, { memo, useEffect } from "react";
import EachType from "./EachType";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { betRaceDetails } from "../../slices/typesSlice";

const Types = () => {
  const dispatch = useDispatch();
  const { betRaceTypes } = useSelector(
    ({ types }) => ({
      betRaceTypes: types.betRaceTypes,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(betRaceDetails());
  }, []);

  if (!betRaceTypes) {
    return null;
  }

  // console.log(betRaceTypes, 'betRaceTypes');

  return (
    <div className="dg_br_bottom_content">
      <div className="dg_br_race_items" id="JS_race_items">
        {Object.keys(betRaceTypes).map((key, index) => (
          <EachType key={index} name={key} type={betRaceTypes[key]} />
        ))}
      </div>
    </div>
  );
};
setTimeout(() => {
  const slider = document.getElementById("JS_race_items");
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}, 1000);

export default memo(Types);
