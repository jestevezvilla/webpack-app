module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3,
        "debug": true,
        "targets": {
          "browsers": [
            "ie >= 10"
          ]
        },
        "useBuiltIns": "usage"
      }
    ],
  ],
}