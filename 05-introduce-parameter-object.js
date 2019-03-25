// original

function readingsOutsideRange(station, min, max) {
  return station.readings.filter(r => r.temp < min || r.temp > max);
}

const alerts = readingsOutsideRange(
  station,
  tempreatureFloor,
  temperatureCeiling
);

// refactor

function readingsOutsideRange(station, range) {
  return station.readings.filter(r => r.temp < range.min || r.temp > range.max);
}

const alerts = readingsOutsideRange(station, {
  min: temperatureFloor,
  max: temperatureCeiling
});

const aggregate = {
  station: station,
  range: {
    min,
    max
  }
};

readingsOutsideRange(aggregate);
