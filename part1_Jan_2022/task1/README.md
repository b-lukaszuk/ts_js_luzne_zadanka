# Task 1

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
