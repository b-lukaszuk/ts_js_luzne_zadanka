# Chapter 4. Data Structures: Objects and Arrays.

---

# Table of contents

1. [Task 1](#task-1)

---

# Task 1

[Go to: Table of contents](#table-of-contents)

## Title

A list

## Description

[...] A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

<pre>
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};
</pre>

Write a function `arrayToList` that builds up a list structure like the one shown when given `[1, 2, 3]` as argument. Also write a `listToArray ` [...]. Then add a helper function `prepend`, [...] and `nth`, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of `nth`.
