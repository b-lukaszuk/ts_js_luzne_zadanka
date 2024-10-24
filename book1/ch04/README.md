# Description

Selected tasks from Marijn Haverbeke "Eloquent JavaScript" 3rd ed.

The tasks will be solved at a whim, it is possible that I will modify some of
them. For better visual clarity I will not use quotations.

Probably I will be solving the tasks in TypeScript.

# Chapter 4. Data Structures: Objects and Arrays.

## Array to list

[...] A list is a nested set of objects, with the first object holding a
reference to the second, the second to the third, and so on.

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

Write a function `arrayToList` that builds up a list structure like the one
shown when given `[1, 2, 3]` as argument. Also write a `listToArray ` [...].
Then add a helper function `prepend`, [...] and `nth`, which takes a list and a
number and returns the element at the given position in the list (with zero
referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of `nth`.

# Settings

Probably to solve a task I will use the following commands/settings.

## Project initialization

```bash
deno init my_project
```

# Coding and Running code

```bash
deno run --watch main.ts
```

or

```bash
deno task dev
```

# Additional info

**Do użytku własnego, nie powinno być używane przez nikogo innego.**

**For personal use only, should not be used by anyone else.**
