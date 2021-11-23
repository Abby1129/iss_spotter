const {nextISSTimesForMyLocation} = require('./iss_promised');

nextISSTimesForMyLocation()
    .then((flyOverTimes) => {
      flyOverTimes.forEach((time) => {
        const date = new Date(time.risetime * 1000);
        const duration = time.duration;
        console.log(`Next pass at ${date} for ${duration} seconds!`);
      });
    })
    .catch((error) => {
      console.log('It didn\'t work: ', error.message);
    }
    );


