module.exports = {
  presets: [
    ["solid", { generate: "dom", hydratable: false }],
    "@babel/preset-env",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    ["transform-jsx", { useVariables: true }],
  ],
  targets: "> 0.25%, not dead",
};
