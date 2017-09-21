var globals = ["document", "window", "later"],
    globalValues = {};

globals.forEach(function(g) {
  if (g in global) globalValues[g] = global[g];
});

// NOTE: change by Nick Gault for Webpack compatibility
// see https://github.com/bunkat/later/issues/155#issuecomment-280387784
// require(process.env['LATER_COV'] ? "./later-cov" : "./later");
require("./later");

module.exports = later;

globals.forEach(function(g) {
  if (g in globalValues) global[g] = globalValues[g];
  else delete global[g];
});
