# Chapter 6. The Secret Life of Objects.

---

# Table of contents

1. [Task 1](#task-1)
2. [Task 2](#task-2)

---

# Task 1

[Go to: Table of contents](#table-of-contents)

## Title

A vector type

## Description

Write a class `Vec` that represents a vector in two-dimensional space. It takes `x` and `y` parameters (numbers), which it should save to properties of the same name.

Give the `Vec` prototype two methods, `plus` and `minus`, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property `length` to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

# Task 2

[Go to: Table of contents](#table-of-contents)

## Title

Groups

## Description

Write a class called `Group` (since `Set` is already taken). Like `Set`, it has `add`, `delete`, and `has` methods. Its constructor creates an empty group, `add` adds a value to the group (but only if it isn’t already a member), `delete` removes its argument from the group (if it was a member), and `has` returns a Boolean value indicating whether its argument is a member of the group.

Give the class a static `from` method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
