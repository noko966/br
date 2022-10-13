const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", "constants.js"],
    modules: [path.resolve(__dirname), "node_modules"],
  },
};
