# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📂File Strucher 

This Area used file Structure understanding..

📄 vite.config.js 
    
     This file allows you to customize the build process such as adding pugins configuring server settings and more.

📄 README.md

    Infromation about the project like how to run it what the project does and other documentation

📄 package.json

    contains the metadata or our project such as it's name, script and dependancies needede to run.

📄 package-lock.json

    this file automatically generated when you run npm install locks down the version of the dependencies install in your project 


📄 index.html

    This is the main HTML file within which your app is loaded it has a basic structure including the root div which react will infuse with your entire application v uses this as the entry point and there's also the script that point to a main jsx file which initializes your appliation.


📄 eslint.config.js

   This is a config file used to define the rules and settings for ESLint lint a popular ilnting tool it helps you identify and fix problems in your code such as coding style violations errors and potential bugs.


📄 .gitignore

    This file tells get which files and folders to ignore when committing your code 

📁 node_modules 
    
    include node modules which contains all the installed dependencies for your project everything from resact V and more this folder is huge and contains even more folders within it you never really have to get into it it's just there for you app to work it's completely managed by npm and you don't have to interact with it directly.


📁 public 

    The public folder which contains static assets such as  images icons and other files that don't need to go through V's bundler file in here can be reference directly   by their path


📁 src

    




## 🕸️How to Project Run 

    npm install or npm i
    cd project-name
    npm run dev


