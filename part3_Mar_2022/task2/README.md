# Task 2

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
