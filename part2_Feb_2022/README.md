---

# Table of contents

1. [Info](#info)
2. [Task 1](#task-1)
3. [Task 2](#task-2)
4. [Task 3](#task-3)
5. [Task 4](#task-4)
6. [Task 5](#task-5)

---

# Info

Tasks from [Rosetta Code. Category: Programming Tasks](https://rosettacode.org/wiki/Category:Programming_Tasks)

# Task 1

[Go to: Table of contents](#table-of-contents)

Write [Anagrams](https://rosettacode.org/wiki/Anagrams)

## Description

When two or more words are composed of the same characters, but in a different order, they are called [anagrams](https://en.wikipedia.org/wiki/Anagram).

Using the word list at http://wiki.puzzlers.org/pub/wordlists/unixdict.txt,
find the sets of words that share the same characters that contain the most words in them.

## Additional info

It takes around 0.06 sec to execute (on my laptop).

# Task 2

[Go to: Table of contents](#table-of-contents)

Write [Animate a pendulum](https://rosettacode.org/wiki/Animate_a_pendulum)

## Description

Create a simple physical model of a pendulum and animate it.

## Additional info

I think that for practice I'm gonna do it in [React](https://reactjs.org/) with [Canvas ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

# Task 3

[Go to: Table of contents](#table-of-contents)

Write [Approximate equality](https://rosettacode.org/wiki/Approximate_equality)

## Description

Create a function which returns true if two floating point numbers are approximately equal.

The function should allow for differences in the magnitude of numbers, so that, for example,
**100000000000000.01** may be approximately equal to **100000000000000.011**,
even though **100.01** is not approximately equal to **100.011**.

If the language has such a feature in its standard library, this may be used instead of a custom function.

Show the function results with comparisons on the following pairs of values:

<pre>
100000000000000.01, 100000000000000.011 (note: should return true)
100.01, 100.011 (note: should return false)
10000000000000.001 / 10000.0, 1000000000.0000001000
0.001, 0.0010000001
0.000000000000000000000101, 0.0
 sqrt(2) * sqrt(2), 2.0
-sqrt(2) * sqrt(2), -2.0
3.14159265358979323846, 3.14159265358979324
</pre>

Answers should be true for the first example and false in the second, so that just rounding the numbers to a fixed number of decimals should not be enough. Otherwise answers may vary and still be correct. See the Python code for one type of solution.

## Additional info

Terminal should be able to display unicode characters i.e.
<pre>
&#x2248;
</pre>

# Task 4

[Go to: Table of contents](#table-of-contents)

Write [Animation](https://rosettacode.org/wiki/Animation)

## Description

Create a window containing the string "Hello World! " (the trailing space is significant).

Make the text appear to be rotating right by periodically removing one letter from the end of the string and attaching it to the front.

When the user clicks on the (windowed) text, it should reverse its direction.

# Task 5

[Go to: Table of contents](#table-of-contents)

Write [Archimedean spiral](https://rosettacode.org/wiki/Archimedean_spiral)

## Description

The [Archimedean spiral](https://en.wikipedia.org/wiki/Archimedean_spiral) is a spiral named after the Greek mathematician Archimedes.

An Archimedean spiral can be described by the equation:

<pre>
r = a + b&#x3B8;
</pre>

with real numbers a and b.

Draw an Archimedean spiral.
