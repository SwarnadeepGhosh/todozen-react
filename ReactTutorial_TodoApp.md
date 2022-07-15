# React Tutorial - Todo app





## Introduction

Setup

- Install **NodeJs** = JS Runtime -- It will install NPM and NPX too
- **NPM** - Manages packages but doesn't make life easy executing any. NPM by itself does not simply run any package. It doesn't run any package as a matter of fact. If you want to run a package using NPM, you must specify that package in your package.json file.
- **NPX** - A tool for executing Node packages. `npx` will check whether `<command>` exists in `$PATH`, or in the local project binaries, and execute it.

```sh
$ node --version (JS Runtime )
v14.18.0

$ npm --version (npm = package manager)
6.14.15

$ npx --version ()
6.14.15
```



**Create react App**

The below line will generate a `react` app boilerplate *within* the path the command had run in, and ensures that you always use the latest version of a generator or build tool without having to upgrade each time you’re about to use it.

```sh
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

- React use JSX (JavaScript Syntax Extension to design any app)
- 
