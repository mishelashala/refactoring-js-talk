function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

// refactor

function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// even more refactor

// getRating :: IDriver -> Number
const getRating = driver => {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
};
