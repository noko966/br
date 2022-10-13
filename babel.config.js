module.exports = {
    extends: "@sportdigi/scripts/babel.config.js",
    babelrcRoots: ["."],
    presets: [["@babel/preset-env", { modules: "commonjs" }]],
    plugins: [
        "@babel/plugin-proposal-function-bind",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-react-jsx"
    ]
};
