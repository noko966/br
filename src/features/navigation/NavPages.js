import React from "react";
import cn from "classnames";

const NavPages = ({ active, className, text, setActivePage, page }) => {
  const tabCn = cn({
    dg_br_side_tab: true,
    active,
    [className]: !!className,
  });
  return (
    <span onClick={() => setActivePage(page)} className={tabCn}>
      {text}
    </span>
  );
};

export default NavPages;
