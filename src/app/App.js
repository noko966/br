import React, { memo, useEffect, useRef } from "react";
import { appConfig, isMobile, setConfig, setTranslations, translations } from "../utils/helpers";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "./rootReducer";
import { createHttpApi, httpApi } from "@sportdigi/http-api";
import PagesWrapper from "../features/PagesWrapper";
import Leaderboard from "../features/leaderboard/Leaderboard";
import Main from "../features/main/Main";
import Types from "../features/types/Types";
import "./assets/styles/all.css";
import cn from "classnames";
import Banner from "../components/Banner";
import SportItem from "../components/SportItem";

const App = ({ config, isAsianView }) => {
  if (!appConfig) {
    setConfig(config);
  }
  if (!translations) {
    setTranslations(config.translations);
  }
  // setTimeout(() => {
  const sideBarEl = useRef();
  const rootEl = useRef();

  function toggle() {
    sideBarEl.current.classList.toggle("active");
  }

  if (!httpApi) {
    createHttpApi(config);
  }

  const toggleSideBarHandler = () => {
    if (rootEl.current.clientWidth <= 966) {
      sideBarEl.current.classList.add("expandable");
    } else {
      if (sideBarEl.current.className.includes("expandable")) {
        sideBarEl.current.classList.remove("expandable");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", toggleSideBarHandler);
    return () => {
      window.removeEventListener("resize", toggleSideBarHandler);
    };
  }, []);

  useEffect(() => {
    const { CdnDomainName } = config.globalSettings.partner;

    const CSSlink = document.createElement("link");

    CSSlink.href = `https://${CdnDomainName}/assets/fonts/sport-icons/sporticons.css?${Date.now()}`;
    CSSlink.rel = "stylesheet";

    const Fontlink = document.createElement("link");

    Fontlink.href = "//fonts.googleapis.com/css?family=Roboto:regular,medium,bold";
    Fontlink.rel = "stylesheet";
    Fontlink.title = "roboto";

    document.head.append(Fontlink);
    document.head.append(CSSlink);
  }, []);

  useEffect(() => {
    rootEl.current && toggleSideBarHandler();
  }, [rootEl.current]);

  const containerCn = cn({
    asian_view: false,
    dg_br_root: true,
    tg_sport_icons_tiny: true,
  });

  return (
    <Provider store={store}>
      {/* <div className={containerCn} ref={rootEl}>
        {isMobile() && (
          <>
            <Header />
            <Banner />
            <div className="dg_br_side" ref={sideBarEl}>
              <div className="dg_br_side_content">
                <PagesWrapper />
              </div>
            </div>
          </>
        )}

        {!isMobile() && (
          <>
            <div className="dg_br_side" ref={sideBarEl}>
              <div className="dg_br_side_content">
                <Main />
              </div>
              <button className="dg_br_expander" onClick={toggle}>
                <svg
                  className="top_sub"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 9.5399e-08L9.5399e-08 0C4.41828 5.26874e-08 8 3.58172 8 8L8 9.5399e-08Z"
                    fill="#353841"
                  />
                </svg>
                <i className="sport_front_icon-arrow-down" />
                <svg
                  className="bottom_sub"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 9.5399e-08L9.5399e-08 0C4.41828 5.26874e-08 8 3.58172 8 8L8 9.5399e-08Z"
                    fill="#353841"
                  />
                </svg>
              </button>
            </div>
            <div className="dg_br_left_side">
              <Banner />
              <Types />
              <Leaderboard />
            </div>
          </>
        )}
      </div> */}

      <div className="dg_bet_race_root">
        <div className="dg_bet_race_dayly_winner_banners_wrapper">
          <div className="dg_bet_race_dayly_winner_banner">
            <div>
              <span className="dg_bet_race_dayly_winner_banner_heading">Dayly Winner</span>
              <div className="dg_bet_race_dayly_winner_banner_sub_row">
                <span className="dg_bet_race_dayly_winner_banner_date">15.07.2021</span>
                <span className="dg_bet_race_dayly_winner_banner_separator"></span>
                <span className="dg_bet_race_dayly_winner_banner_bet">Free Bet</span>
              </div>
            </div>
            <div>
              <strong className="dg_bet_race_dayly_winner_banner_prize">128 000</strong>
              <span className="dg_bet_race_dayly_winner_banner_currency">AMD</span>
            </div>
          </div>
          <div className="dg_bet_race_dayly_winner_banner">
            <div>
              <span className="dg_bet_race_dayly_winner_banner_heading">Dayly Winner</span>
              <div className="dg_bet_race_dayly_winner_banner_sub_row">
                <span className="dg_bet_race_dayly_winner_banner_date">15.07.2021</span>
                <span className="dg_bet_race_dayly_winner_banner_separator"></span>
                <span className="dg_bet_race_dayly_winner_banner_bet">Free Bet</span>
              </div>
            </div>
            <div>
              <strong className="dg_bet_race_dayly_winner_banner_prize">128 000</strong>
              <span className="dg_bet_race_dayly_winner_banner_currency">AMD</span>
            </div>
          </div>
          <div className="dg_bet_race_dayly_winner_banner">
            <div>
              <span className="dg_bet_race_dayly_winner_banner_heading">Dayly Winner</span>
              <div className="dg_bet_race_dayly_winner_banner_sub_row">
                <span className="dg_bet_race_dayly_winner_banner_date">15.07.2021</span>
                <span className="dg_bet_race_dayly_winner_banner_separator"></span>
                <span className="dg_bet_race_dayly_winner_banner_bet">Free Bet</span>
              </div>
            </div>
            <div>
              <strong className="dg_bet_race_dayly_winner_banner_prize">128 000</strong>
              <span className="dg_bet_race_dayly_winner_banner_currency">AMD</span>
            </div>
          </div>
          <div className="dg_bet_race_dayly_winner_banner">
            <div>
              <span className="dg_bet_race_dayly_winner_banner_heading">Dayly Winner</span>
              <div className="dg_bet_race_dayly_winner_banner_sub_row">
                <span className="dg_bet_race_dayly_winner_banner_date">15.07.2021</span>
                <span className="dg_bet_race_dayly_winner_banner_separator"></span>
                <span className="dg_bet_race_dayly_winner_banner_bet">Free Bet</span>
              </div>
            </div>
            <div>
              <strong className="dg_bet_race_dayly_winner_banner_prize">128 000</strong>
              <span className="dg_bet_race_dayly_winner_banner_currency">AMD</span>
            </div>
          </div>
        </div>
        <div className="dg_bet_race_card_lists_wrapper">
          <div className="dg_bet_race_card_list">
            <div className="dg_bet_race_list_heading">
              <i className="sport_front_icon-bet_race"></i>
              <span>Current</span>
            </div>
            <div className="dg_bet_race_card">
              <h6 className="dg_bet_race_card_title">Football All Leagues</h6>
              <div className="dg_bet_race_card_footer">
                <span className="dg_bet_race_card_sub_title dg_bet_race_card_sub_title-accent">Daily and Final</span>
                <span className="dg_bet_race_card_date">21.03-24.05</span>
              </div>
            </div>

            <div className="dg_bet_race_card">
              <h6 className="dg_bet_race_card_title">Football All Leagues</h6>
              <div className="dg_bet_race_card_footer">
                <span className="dg_bet_race_card_sub_title dg_bet_race_card_sub_title-accent">Daily and Final</span>
                <span className="dg_bet_race_card_date">21.03-24.05</span>
              </div>
            </div>

            <div className="dg_bet_race_card">
              <h6 className="dg_bet_race_card_title">Football All Leagues</h6>
              <div className="dg_bet_race_card_footer">
                <span className="dg_bet_race_card_sub_title dg_bet_race_card_sub_title-accent">Daily and Final</span>
                <span className="dg_bet_race_card_count_down_wrapper">
                  <div>8d</div>
                  <span>:</span>
                  <div>4h</div>
                  <span>:</span>
                  <div>10m</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* tournament card details */}
        <div className="dg_bet_race_tournament_info_card">
          <div className="dg_bet_race_tournament_info_card_row_top">
            <div>
              <span>Start date</span>
              <strong>21.11</strong>
              <strong>20:11</strong>
            </div>
            <strong>/</strong>
            <div>
              <span>End date</span>
              <strong>21.11</strong>
              <strong>20:11</strong>
            </div>
          </div>
          <div className="dg_bet_race_tournament_info_card_row_prize">
            <i className="sport_front_icon-bonus"></i>
            <span>Daily Prizes</span>
            <span>(first 6)</span>
            <strong>60 450</strong>
            <strong>AMD</strong>
            <div className="dg_bet_race_tournament_info_card_row_prizes_icons">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="dg_bet_race_tournament_info_card_row_prize">
            <i className="sport_front_icon-bonus"></i>
            <span>Daily Prizes</span>
            <span>(first 6)</span>
            <strong>60 450</strong>
            <strong>AMD</strong>
            <div className="dg_bet_race_tournament_info_card_row_prizes_icons">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
        {/* details ley valie */}
        <div className="dg_bet_race_key_value_list">
          <div className="dg_bet_race_key_value_row">
            <div>
              <span>Points From</span>
            </div>
            <div>
              <strong>Pure Win</strong>
            </div>
          </div>

          <div className="dg_bet_race_key_value_row">
            <div>
              <span>Points From</span>
            </div>
            <div>
              <strong>Live, Pre-match</strong>
            </div>
          </div>

          <div className="dg_bet_race_key_value_row">
            <div>
              <span>Bet Type</span>
            </div>
            <div>
              <strong>Single, Multi </strong>
              <span> 3</span>
            </div>
          </div>

          <div className="dg_bet_race_key_value_row">
            <div>
              <span>Min Odd</span>
            </div>
            <div>
              <span>1.5 </span>
              <strong>Total</strong>
            </div>
          </div>

          <div className="dg_bet_race_key_value_row">
            <div>
              <span>Min Bet Amout</span>
            </div>
            <div>
              <span>1 000 </span>
              <strong>AMD</strong>
            </div>
          </div>
        </div>
        <div className="dg_bet_race_decorated_heading">
          <div></div>
          <span>Sports</span>
        </div>

        <div className="dg_bet_race_hero_with_image_list">
          {[
            { name: "Football", Id: 1 },
            { name: "BasketBall", Id: 2 },
            { name: "BasketBall", Id: 5 },
            { name: "ZrtaBol", Id: 10 },
            { name: "BasketBall", Id: 80 },
          ].map((sport, i) => {
            return <SportItem key={sport.Id} Id={sport.Id} name={sport.name} />;
          })}
        </div>

        <div className="dg_bet_race_decorated_heading">
          <div></div>
          <span>Leagues</span>
        </div>

        <div className="dg_bet_race_leagues_list">
          <div className="dg_bet_race_league_wrapper">
            <div className="dg_bet_race_league_title">HandBall</div>
            <div className="dg_bet_race_league_items_wrapper">
              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <div key={i} className="dg_bet_race_league_item">
                    <i className="sport_front_icon-82"></i>
                    <p>ITF. Men. Bourg-en-Bresse. </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="dg_bet_race_leagues_list">
          <div className="dg_bet_race_league_wrapper">
            <div className="dg_bet_race_league_title">HandBall</div>
            <div className="dg_bet_race_league_items_wrapper">
              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <div key={i} className="dg_bet_race_league_item">
                    <i className="sport_front_icon-82"></i>
                    <p>ITF. Men. Bourg-en-Bresse. </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="dg_bet_race_tabs_wrapper">
          <button>Main</button>
          <button className="dg_bet_race-active">Leaderboard</button>
        </div>

        <label className="dg_bet_race_tab_filter" htmlFor="dayFilter">
          <input id="dayFilter" type={"checkbox"} />
          <div className="dg_bet_race_tab_filter_imitator">
            <span></span>
            <div>Daily</div>
            <div>Final</div>
          </div>
        </label>
      </div>
    </Provider>
  );
};

export default memo(App);
