function isEligibleForDiscount(anOrder) {
  return anOrder.basePrice > 1000;
}

module.exports = { isEligibleForDiscount };
