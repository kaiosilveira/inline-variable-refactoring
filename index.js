function isEligibleForDiscount(anOrder) {
  const basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

module.exports = { isEligibleForDiscount };
