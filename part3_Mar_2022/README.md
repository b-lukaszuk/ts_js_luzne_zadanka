---

# Table of contents

1. [Info](#info)
2. [Task 1](#task-1)
3. [Task 2](#task-2)

---

# Info

Tasks from [Rosetta Code. Category: Programming Tasks](https://rosettacode.org/wiki/Category:Programming_Tasks)

# Task 1

[Go to: Table of contents](#table-of-contents)

Write [Angles (geometric), normalization and conversion](https://rosettacode.org/wiki/Angles_(geometric),_normalization_and_conversion)

## Description

This task is about the normalization and/or conversion of (geometric) angles using some common scales.

The angular scales that will be used in this task are:
+ degree
+ gradian
+ mil
+ radian

### Definitions

The angular scales used or referenced here:
+ turn is a full turn or 360 degrees, also shown as 360º
+ degree is 1/360 of a turn
+ gradian is 1/400 of a turn
+ mil is 1/6400 of a turn
+ radian is 1/2PI of a turn (or 0.5/PI of a turn)

Or, to put it another way, for a full circle:
+ there are 360 degrees
+ there are 400 gradians
+ there are 6,400 mils
+ there are 2PI radians (roughly equal to 6.283+)

### Positive and negative angles

Although the definition of the measurement of an angle doesn't support the concept of a negative angle, it's frequently useful to impose a convention that allows positive and negative angular values to represent orientations and/or rotations in opposite directions relative to some reference. It is this reason that negative angles will keep their sign and not be normalized to positive angles.


### Normalization

Normalization (for this Rosetta Code task) will keep the same sign, but it will reduce the magnitude to less than a full circle; in other words, less than 360º.

Normalization shouldn't change -45º to 315º,

An angle of 0º, +0º, 0.000000, or -0º should be shown as 0º.

### Task

Write a function (or equivalent) to do the normalization for each scale.
Suggested names:
d2d, g2g, m2m, and r2r

Write a function (or equivalent) to convert one scale to another.
Suggested names for comparison of different computer language function names:
d2g, d2m, and d2r for degrees
g2d, g2m, and g2r for gradians
m2d, m2g, and m2r for mils
r2d, r2g, and r2m for radians

Normalize all angles used (except for the "original" or "base" angle).
Show the angles in every scale and convert them to all other scales.
Show all output here on this page.

For the (above) conversions, use these dozen numbers (in the order shown):
-2   -1   0   1   2   6.2831853   16   57.2957795   359   399   6399   1000000

# Task 2

[Go to: Table of contents](#table-of-contents)

Write [Balanced ternary](https://rosettacode.org/wiki/Balanced_ternary)

## Description

[Balanced ternary](https://en.wikipedia.org/wiki/Balanced_ternary) is a way of representing numbers. Unlike the prevailing binary representation, a balanced ternary integer is in base 3, and each digit can have the values 1, 0, or −1.

## Examples

Decimal 11 = 3^2 + 3^1 − 3^0, thus it can be written as "++−"

Decimal 6 = 3^2 − 3^1 + 0 × 3^0, thus it can be written as "+−0"

## What to do

Implement balanced ternary representation of integers with the following:
1. Support arbitrarily large integers, both positive and negative;
2. Provide ways to convert to and from text strings, using digits '+', '-' and '0' (unless you are already using strings to represent balanced ternary; but see requirement 5).
3. Provide ways to convert to and from native integer type (unless, improbably, your platform's native integer type is balanced ternary). If your native integers can't support arbitrary length, overflows during conversion must be indicated.
4. Provide ways to perform addition, negation and multiplication directly on balanced ternary integers; do not convert to native integers first.
5. Make your implementation efficient, with a reasonable definition of "efficient" (and with a reasonable definition of "reasonable").

## Test case

With balanced ternaries a from string "+-0++0+", b from native integer -436, c "+-++-":
+ write out a, b and c in decimal notation;
+ calculate a × (b − c), write out the result in both ternary and decimal notations.
