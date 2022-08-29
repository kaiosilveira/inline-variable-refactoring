const { isEligibleForDiscount } = require(".");

describe("isEligibleForDiscount", () => {
  it("should return true if order.basePrice is greater than 1000", () => {
    const anOrder = { basePrice: 1001 };
    const isEligible = isEligibleForDiscount(anOrder);
    expect(isEligible).toEqual(true);
  });

  it("should return false if order.basePrice is less than 1000", () => {
    const anOrder = { basePrice: 999 };
    const isEligible = isEligibleForDiscount(anOrder);
    expect(isEligible).toEqual(false);
  });
});
