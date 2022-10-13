import React, { useEffect } from "react";
import { singleBanner } from "@sportdigi/banner";
import cn from "classnames";
import {generateBannerConfig} from "../utils/helpers";
import {TOP_BANNER_ID} from "../utils/constants";

let bannerObj = null;

const Banner = () => {
  useEffect(() => {
      const topBannerParams = generateBannerConfig();
      const bannerContainer = document.getElementById(TOP_BANNER_ID);
      if (bannerContainer) {
        bannerObj = singleBanner(topBannerParams);
      }
  }, []);

  const wrapperCn = cn({
    mt_banner_wrapper: true,
  });

  return (
    <div className={wrapperCn}>
      <div id={TOP_BANNER_ID} />
    </div>
  );
};

export default Banner;
