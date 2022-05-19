---

# Table of contents

1. [Info](#info)
2. [Task 1](#task-1)
3. [Task 2](#task-2)
4. [Task 3](#task-3)

---

# Task 1

[Go to: Table of contents](#table-of-contents)

My try on snake game with vanilla TS/JS.

Explanation how to run TS modules to JS found [here](https://www.youtube.com/watch?v=EpOPR03z4Vw)

Basically go to `task1/` open terminal and run:

```bash
tsc --watch
```

Run *.html file with VSCode LiverServer ('Go Live')

or http-server [http-server](https://www.npmjs.com/package/http-server) by typing into another terminal window

```bash
npx http-server --cors # no installation
```

or

```bash
npm install --global http-server # install globally
# and
http-server [path] [options]
# e.g.
http-server -o ./public/index.html --cors # opens web browser with localhost 8080
```

## Additional info

**Do użytku własnego, nie powinno być używane przez nikogo innego.**
**For personal use only, should not be used by anyone else.**

# Task 2

[Go to: Table of contents](#table-of-contents)

Write a program (function) that will take a molecular formula and compute the molecular mass [g/mol] of a substance.

Examples:

+ glucose
  - IN: "C6H12O6"
  - OUT: 180.156
+ phosphoric acid
  - IN: "H3PO4"
  - OUT: 98.00
+ tyrosine
  - IN: "C9H11NO3"
  - OUT: 181.191

## Task 2.1

Try to expand it to compute something a bit more difficult, like:

+ hydroxyapatite
  - IN: "Ca5(PO4)3OH" or "Ca10(PO4)6(OH)2"
  - OUT: 502.31 or 1004.62

# Task 3

[Go to: Table of contents](#table-of-contents)

Similar to Task2. Try something alike for [amino acids](https://en.wikipedia.org/wiki/Amino_acid), e.g read sequence of aminoacids from something like [FASTA format](https://en.wikipedia.org/wiki/FASTA_format), e.g.

<pre>
MDSKGSSQKGSRLLLLLVVSNLLLCQGVVSTPVCPNGPGNCQVSLRDLFDRAVMVSHYIHDLSS
EMFNEFDKRYAQGKGFITMALNSCHTSSLPTPEDKEQAQQTHHEVLMSLILGLLRSWNDPLYHL
VTEVRGMKGAPDAILSRAIEIEEENKRLLEGMEMIFGQVIPGAKETEPYPVWSGLPSLQTKDED
</pre>

should return proper molecular mass in [g/mol] or [kDa]
