import { TOP_BANNER_ID } from "./constants";
import React from "react";

export let appConfig = null;
export let translations = null;

export function setConfig(config) {
  appConfig = config;
}

export function setTranslations(config) {
  translations = config;
}

export const isMobile = () => {
  return document.documentElement.clientWidth < 800;
};

export function generateBannerConfig() {
  const { server, globalSettings } = appConfig;
  return {
    containerId: TOP_BANNER_ID,
    initParams: {
      server,
      countryCode: globalSettings.user.CountryCode,
      languageId: globalSettings.language.Id,
      languageCode: globalSettings.language.TwoLetterName,
      partnerId: globalSettings.partner.Id,
      cmsServer: globalSettings.partner.CmsServiceUri,
      sectionId: 7,
      deviceType: 1,
    },
    autoplayEnabled: true,
    arrowsEnabled: false,
    paginationEnabled: true,
    descriptionEnabled: false,
    oddsModeEnabled: true,
    paginationDynamic: true,
    paginationViewMode: "digi_ico_minus",
    customClasses: {
      odd: "mt_stake",
      oddActive: "mt_stake-selected",
      paginationItem: "",
    },
    rtlEnabled: globalSettings.language.IsRTL,
  };
}

export const getPointsFromType = (translations, type) => {
  const pointsFromType = {
    1: "Min Bet Amount",
    2: "Gross Win",
    3: "Pure Win",
  };

  return pointsFromType[type];
};

export const getEventTypes = (translations, types) => {
  const eventTypes = {
    1: "Live",
    2: "Pre-Match",
  };

  return types.reduce((res, eventType, index) => {
    return `${res}${eventTypes[eventType]}${index === types.length - 1 ? "" : ", "}`;
  }, "");
};

export const getBetTypes = (translations, types) => {
  const betTypes = {
    1: "Single",
    2: "Express",
    3: "Single & Express",
  };

  // return `${res}${betTypes[betType]}${index === types.length - 1 ? "" : ", "}`;

  return types.reduce((res, betType, index) => {
    return `${res}${betTypes[betType]}${index === types.length - 1 ? "" : ", "}`;
  }, "");
};

export const getPlayerPrizeType = (prizeType, giftName) => {
  switch (prizeType) {
    case 1:
      return translations.TOURNAMENT_PRIZE_MONEY;
    case 2:
      // TODO change concatination
      // return translations.TOURNAMENT_PRIZE_GIFT + (giftName || '');
      return translations.TOURNAMENT_PRIZE_GIFT + " " + (giftName || "");
    case 3:
      return translations.TOURNAMENT_PRIZE_BONUS + " " + (giftName || "");
    default:
      return null;
  }
};

export const PaintPrizeType = (prize) => {
  // TODO need to clarify paint 'bonus / AMD' or not.....
  switch (prize.PTYP) {
    case 1:
      return <span className="dg_br_prize_item_money">{prize.A || prize.GV} AMD</span>;
    case 2:
      return <img alt="" src={`data:image/png;base64,${prize.GI}`} className="dg_br_prize_img" />;
    case 3:
      return <span className="dg_br_prize_item_money">{prize.A || prize.GV} Bonus</span>;
  }
};
