---

# Table of contents

1. [Info](#info)
2. [Task 1](#task-1)
3. [Task 2](#task-2)
4. [Task 3](#task-3)
5. [Task 4](#task-4)

---

# Info

Tasks from [Rosetta Code. Category: Programming Tasks](https://rosettacode.org/wiki/Category:Programming_Tasks)

# Task 1

[Go to: Table of contents](#table-of-contents)

Inspired by: [Birthday problem on wiki](https://en.wikipedia.org/wiki/Birthday_problem)

## The problem

Let's say there are 30 people at a party. What is the probability that any two (or more) individuals celebrate their birthday the same day.

## What to do

Write a computer simulation to calculate the probability specified above (say 10k iterations).

## Assumptions

List of assumptions:
+ every year got exactly 365 days
+ people's births are distributed equaly throughout the year (uniform distribution)
+ use only standard Python's libraries (the one you get without pip-ing)

## Additional

Compare performance with my Python and Haskell code to that task.

### Observations

On the same machine I got:

1. TS/JS: 10k iters: 0.067 sec, 100k iters: 0.201 sec
2. Python: 10k iters: 0.115 sec, 100k iters: 0.879 sec
3. Haskell: 10k iters: 0.421 sec, 100k iters: 2.184 sec

Point of notice: the code was not identical (still, it was quite similar)

# Task 2

[Go to: Table of contents](#table-of-contents)

[100 prisoners on rosettacode webpage](https://rosettacode.org/wiki/100_prisoners)

## The Problem

100 prisoners are individually numbered 1 to 100

A room having a cupboard of 100 opaque drawers numbered 1 to 100, that cannot be seen from outside.

Cards numbered 1 to 100 are placed randomly, one to a drawer, and the drawers all closed; at the start.

Prisoners start outside the room
- They can decide some strategy before any enter the room.
- Prisoners enter the room one by one, can open a drawer, inspect the card number in the drawer, then close the drawer.
- A prisoner can open no more than 50 drawers.
- A prisoner tries to find his own number.
- A prisoner finding his own number is then held apart from the others.
- If all 100 prisoners find their own numbers then they will all be pardoned. If any don't then all sentences stand.

## What to do

Simulate several thousand instances of the game where the prisoners randomly open drawers
Simulate several thousand instances of the game where the prisoners use the optimal strategy mentioned in the Wikipedia article, of:
- First opening the drawer whose outside number is his prisoner number.
- If the card within has his number then he succeeds otherwise he opens the drawer with the same number as that of the revealed card. (until he opens his maximum).

Show and compare the computed probabilities of success for the two strategies.

## Additional

Compare performance with my Python and Haskell code to that task.

### Observations

On the same machine I got:

1. TS/JS: 10k iters: 1.2 sec, 100k iters: 10.2 sec
2. Haskell: 10k iters: 17 sec, 100k iters: 160 sec
3. Python: 10k iters: 49 sec, 100k iters: I didn't test it

Point of notice: the code was not identical (still, it was quite similar),
possibly the other two are not optimal, but still, the differences in speed of execution are quite big.

# Task 3

[Go to: Table of contents](#table-of-contents)

[Proper Divisors](https://rosettacode.org/wiki/Proper_divisors)

## Description

### Basic Info

The `proper divisors` of a positive integer `N` are those numbers, other than `N` itself, that divide `N` without remainder.

For `N > 1` they will always include 1, but for `N == 1` there are no proper divisors.

### Examples

The proper divisors of 6 are 1, 2, and 3.
The proper divisors of 100 are 1, 2, 4, 5, 10, 20, 25, and 50.


### What to do?

Create a routine to generate all the proper divisors of a number.
use it to show the proper divisors of the numbers 1 to 10 inclusive.
Find a number in the range 1 to 20,000 with the most proper divisors. Show the number and just the count of how many proper divisors it has.

### Additional info

Interesting, this TS/JS program takes ~1.6 sec to execute, analogical program written in Python takes ~9 sec to execute (the same device, similar code)

# Task 4

[Go to: Table of contents](#table-of-contents)

[Amicable Pairs](https://rosettacode.org/wiki/Amicable_pairs)

## Description

### Basic Info

Two integers `N` and `M` are said to be `amicable pairs` if `N != M` and `sum(propDivs(N)) = M` as well as `sum(propDivs(M)) = N`

### Example

1184 and 1210 are an amicable pair, with proper divisors:

+ 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
+ 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.

### What to do?

Calculate and show here the Amicable pairs below 20,000; (there are eight).

### Additional info

Due to performance I limited my programs to look for amiable pairs below 2'000.

Still, it takes around 11 sec. to find them (TS/JS), interestingly similar program in Python needs ~65 sec (the same device, similar code).
