const { nextISSTimesForMyLocation } = require("./iss");

const showFlyOverTimes = function (flyOverTimes) {
  flyOverTimes.forEach(function (time) {
    const date = new Date(time.risetime * 1000);
    const duration = time.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work", error);
  }
  showFlyOverTimes(flyOverTimes);
});
