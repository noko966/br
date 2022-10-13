import React from "react";
import AppStarter from "@sportdigi/app-starter";
import App from "../app/App";

export class Starter extends AppStarter {
  render() {
    return <App config={this.config} />;
  }
}
