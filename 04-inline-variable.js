function shouldApplyDiscount(order) {
  let basePrice = order.basePrice;
  return basePrice > 1000;
}

// refactor

function shouldApplyDiscount(order) {
  return order.basePrice > 1000;
}

// more refactor

// shouldApplyDiscount :: Order -> Boolean
const shouldApplyDiscount = ({ basePrice }) => {
  return basePrice > 100;
};
