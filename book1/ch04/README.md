# Chapter 4. Data Structures: Objects and Arrays.

---

# Table of contents

1. [Task 1](#task-1)
2. [Task 2](#task-2)

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

# Task 2

[Go to: Table of contents](#table-of-contents)

## Title

Deep comparison

## Description

[...]

Write a function `deepEqual` that takes two values and returns `true` only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to `deepEqual`.

[..] But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object". [...]
