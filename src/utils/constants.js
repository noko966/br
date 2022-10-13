import {translations} from "./helpers";

export const BET_RACE_TYPES = {
  1: "Daily",
  2: "Final",
  3: "Daily & Final",
};

export const PRIZE_PERIODS = {
  1: "Daily Prizes",
  2: "Final Prizes"
};

// export const BET_RACE_TYPES = {
//   1: translations.TOURNAMENT_DAILY_WINNERS,
//   2: translations.CONTEST_FINAL,
//   3: `${translations.TOURNAMENT_DAILY_WINNERS} & ${translations.CONTEST_FINAL}`,
// };

export const BET_RACE_ICONS_SVG = {
  Current:
    "M10 1C5.032 1 1 5.032 1 10C1 14.968 5.032 19 10 19C14.968 19 19 14.968 19 10C19 5.032 14.968 1 10 1ZM13.186 10.387L8.686 13.087C8.389 13.267 8.002 13.051 8.002 12.7V7.3C8.002 6.949 8.38 6.733 8.686 6.913L13.186 9.613C13.474 9.793 13.474 10.207 13.186 10.387Z",
  Upcoming:
    "M11 4.07V2H12.5C13.05 2 13.5 1.55 13.5 1C13.5 0.45 13.05 0 12.5 0H7.5C6.95 0 6.5 0.45 6.5 1C6.5 1.55 6.95 2 7.5 2H9V4.07C5.05 4.56 2 7.92 2 12C2 16.42 5.58 20 10 20C14.42 20 18 16.42 18 12C18 7.92 14.95 4.56 11 4.07ZM10 18.5C6.42 18.5 3.5 15.58 3.5 12C3.5 8.42 6.42 5.5 10 5.5C13.58 5.5 16.5 8.42 16.5 12C16.5 15.58 13.58 18.5 10 18.5Z M15.5 12C15.5 15.04 13.04 17.5 10 17.5C7.03 17.5 4.5 14.97 4.5 12C4.5 8.96 6.96 6.5 10 6.5C10.35 6.5 10.69 6.53 11.03 6.6V10.42C11.03 10.72 11.28 10.97 11.58 10.97H15.4C15.47 11.31 15.5 11.65 15.5 12Z",
  Last: "M10 1C5.03 1 1 5.03 1 10C1 14.97 5.03 19 10 19C14.97 19 19 14.97 19 10C19 5.03 14.97 1 10 1ZM13.53 13.73C13.38 13.88 13.19 13.95 13 13.95C12.81 13.95 12.62 13.88 12.47 13.73L9.72 10.98C9.42 10.68 9.25 10.27 9.25 9.85001V5.95999C9.25 5.54999 9.59 5.20999 10 5.20999C10.41 5.20999 10.75 5.54999 10.75 5.95999V9.85001L13.53 12.67C13.82 12.96 13.82 13.44 13.53 13.73Z",
};

export const pointsFromType = {
  1: "Pure Win",
  2: "Not Pure Win",
};
export const eventTypes = {
  1: "live",
  2: "prematch",
};
export const BET_TYPES = {
  1: "single",
  2: "express",
  3: "single & express",
};

export const TOP_BANNER_ID = "tg_top_banner";

export const PERIOD_TYPES = {
  DAILY: 1,
  FINAL: 2,
};

export const ROUTING_PATHS = {
  HOME: "/",
  MAIN: "/main",
  LIDERBOARD: "/leaderboard",
};

export const NAVIGATION_PAGES = {
  HOME: 0,
  MAIN: 1,
  LEADERBOARD: 2
};

export const TOURNAMENT_TYPE = {
  DAILY: 0,
  FINAL: 1
}