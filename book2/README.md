# Description

Selected bits from A. Aravinth, S. Machiraju "Beginning Functional JavaScript".

The bits will be done at a whim, it is possible that I will modify some of them.
For better visual clarity I will not use quotations.

Probably I will be writing the code in TypeScript instead of JavaScript.

# Settings

Probably I will use the following commands/settings [of course unless Jupyter
Notebook (*.ipynb files) will be used].

## Project initialization

```bash
npm init --yes
# npm install --save-dev typescript # optional already installed globally
npm install --save-dev tsc-watch
```

## Config files

Exemplary `package.json` file in e.g. `./ch02/task1/` folder (unless Jupyter
Notebbok will be used).

<pre>
{
  "name": "ch02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "tsc-watch --onsuccess \"node dist/index.js\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "tsc-watch": "ver.num.here",
    "typescript": "ver.num.here"
  }
}
</pre>

exemplary `tscconfig.json` in e.g. `./ch02/task1/` folder

<pre>
{
  "compilerOptions": {
    "target": "es2015",
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
</pre>

# Coding and Running code

Exemplary commands to start writing program (unless Jupyter Notebook are used).

```bash
mkdir src dist
echo "console.log('Hello World.');" > ./src/index.ts
code ./src & # opens ./src folder in vscode editor
npm start # Ctrl-C stops the program
```

Most likely I will just I will archive only the config files (`*.json`) and TS
files (`*.ts`) from `/src/` folder.

Although perhaps only the TS files (`*.ts`) from `/src/` folder will be
included.

# Additional info

**Do użytku własnego, nie powinno być używane przez nikogo innego.**

**For personal use only, should not be used by anyone else.**
