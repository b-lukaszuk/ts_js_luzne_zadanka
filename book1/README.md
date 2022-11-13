# Description

Selected tasks from Marijn Haverbeke "Eloquent JavaScript" 3rd ed.

The tasks will be solved at a whim, it is possible that I will modify some of them.
For better visual clarity I will not use quotations.

Probably I will be solving the tasks in TypeScript.

# Settings

Probably to solve a task I will use the following commands/settings.

## Project initialization

```bash
npm init --yes
# npm install --save-dev typescript # optional already installed globally
npm install --save-dev tsc-watch
```

## Config files

exemplary `package.json` file in e.g. `./ch02/task1/` folder

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

exemplary commands to start writing program

```bash
mkdir src dist
echo "console.log('Hello World.');" > ./src/index.ts
code ./src & # opens ./src folder in vscode editor
npm start # Ctrl-C stops the program
```

Most likely I will just I will archive only the config files (`*.json`) and TS files (`*.ts`) from `/src/` folder.

Although perhaps only the TS files (`*.ts`) from `/src/` folder will be included.

# Additional info

**Do użytku własnego, nie powinno być używane przez nikogo innego.**

**For personal use only, should not be used by anyone else.**
