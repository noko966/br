import React from "react";
import cn from "classnames";

const Tab = ({ active, disabled, className, text, changeTab }) => {
  const tabCn = cn({
    dg_br_leaderBoard_tab: true,
    active,
    disabled,
    [className]: !!className,
  });
  return (
    <div onClick={changeTab} className={tabCn}>
      <span className="dg_br_leaderBoard_tab_text">{text}</span>
    </div>
  );
};

export default Tab;
