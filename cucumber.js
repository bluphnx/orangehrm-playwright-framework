Module.exports = {
  default: {
    require       : ["src/step-definitions/**/*.ts", "src/hooks/**/*.ts"],
    path          : ["features/**/*.feature"],
    requireModule : ["ts-node/register"],
    format        : ["progress-bar"],
  },
};
