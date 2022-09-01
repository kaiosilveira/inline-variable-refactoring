[![Continuous Integration](https://github.com/kaiosilveira/inline-variable-refactoring/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/inline-variable-refactoring/actions/workflows/ci.yml)

ℹ️ _This repository is part of my "refactoring" catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Inline Variable

**Formerly: Inline Temp**

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
let basePrice = anOrder.basePrice;
return basePrice > 1000;
```

</td>

<td>

```javascript
return anOrder.basePrice > 1000;
```

</td>
</tr>
</tbody>
</table>

**Inverse of: [Extract Variable](https://github.com/kaiosilveira/extract-variable-refactoring)**

Sometimes a variable is as clear and short as the expression it is derived from, and sometimes it gets in the way of refactoring the code surrounding it. In these cases, it is often best to delete the variable and inline the originating expression.

## Working example

For this refactoring, we are going to analyze a function that returns a boolean saying whether an order is eligible for a discount. It returns `true` if the `basePrice` of the order is greater than `1000` and `false` otherwise. The starting code looks like this:

```javascript
function isEligibleForDiscount(anOrder) {
  const basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
```

### Test suite

Two tests were added to cover this refactoring: one for when the function returns `true` and another for when it returns `false`:

```javascript
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
```

### Steps

To perform this refactoring, we first replace the variable by its originating expression:

```diff
diff --git a/index.js b/index.js
@@ -1,6 +1,6 @@
 function isEligibleForDiscount(anOrder) {
   const basePrice = anOrder.basePrice;
-  return basePrice > 1000;
+  return anOrder.basePrice > 1000;
 }

 module.exports = { isEligibleForDiscount };
```

And then simply remove the now unused variable:

```diff
diff --git a/index.js b/index.js
@@ -1,5 +1,4 @@
 function isEligibleForDiscount(anOrder) {
-  const basePrice = anOrder.basePrice;
   return anOrder.basePrice > 1000;
 }

```

And that's it!

### Commit history

See below a chronology (from top to bottom) of all the refactoring steps:

| Commit SHA                                                                                                             | Message                                    |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [8009aae](https://github.com/kaiosilveira/inline-variable-refactoring/commit/8009aae297988d6d52d686971913b57056a52af5) | replace variable by originating expression |
| [6eb1a50](https://github.com/kaiosilveira/inline-variable-refactoring/commit/6eb1a5098a690dac8bd4e9f73b3141547f8982ab) | remove unused variable basePrice           |

The full commit history can be seen in the [Commit History tab](https://github.com/kaiosilveira/inline-variable-refactoring/commits/main).
