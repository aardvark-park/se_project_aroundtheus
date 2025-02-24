const presets = [
  [
    "@babel/preset-env",
    {
      targets: "defaults, not IE 11, not dead",

      // use polyfills for the browsers specified in the above targets option
      // Babel uses polyfills from the core-js library
      useBuiltIns: "entry",
      corejs: "^3",
    },
  ],
];

module.exports = { presets };
