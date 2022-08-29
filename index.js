function isEligibleForDiscount(anOrder) {
  const basePrice = anOrder.basePrice;
  return anOrder.basePrice > 1000;
}

module.exports = { isEligibleForDiscount };
