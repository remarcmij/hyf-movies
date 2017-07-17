# HYF-MOVIES Hands-On

## Introduction

Today we are going a small web application. We will do this _hands-on_: each of you is to follow along on your own computer as we progress through the lecture.

It will be a very simple application. We are going to request information about some movies from an API provided by a server. The server will be running on your own computer.

For the application we will start with bare-bones `index.html`, `styles.css` and `client.js` files to display the movie information fetched from the server and dynamically construct HTML elements to display the information.

In what form we will display the information is not determined beforehand. We will jointly decide how we want to present the information and structure the HTML, whether to use (a minimum of) CSS and so on.

## What we will learn in this hands-on

- The **JSON** file format (JSON = JavaScript Object Notation)
- Using an **IIFE** to create a local scope
- Making an **ajax** request
- See a **callback** in action
- Try various forms of `for` loops and a `forEach`
- Creating **DOM** (Document Object Model) elements in code
- Some array functions, e.g. `slice()`, `filter()`, `sort()`
- Restructure (_refactor_) our code as it get more complex
- Get a peek at a **Node** application

Note that the way we dynamically create DOM elements today is not they way you will do it in later modules. In the React course you will learn far more advanced ways of manipulating the DOM.

## Prerequisites

1. Git command line (Git Bash on Windows)
2. Node (check for recent version)
3. VSCode
4. eslint (`npm install -g eslint`)
5. Google Chrome browser

## Preparations

1. Install the repo (replace `<project folder>` with the name of the folder where you keep of your HYF work. In this folder a `hyf-movies` subfolder will be created by the `git clone` command below):

    ```
    cd <project folder>
    git clone https://github.com/remarcmij/hyf-movies.git
    cd hyf-movies
    npm install
    npm start
    ```

2. Open File Explorer (Windows) or equivalent on Mac or Linux and go to the `hyf-movies` folder.
3. Double-click the `index.html` file to open it in the browser.
4. Open Chrome Developer Tools (click on the three horizontal dots in the menu bar and select _More Tools_, _Developer Tools_).
5. Refresh the page in Chrome.
6. Switch to the network tab in Developer tools.
7. Inspect the `movies` row. Note the `XHR` type.
8. Click on `movies` row.
9. Skim through the Headers.
10. Select the Preview tab.
11. Inspect the server response.
12. Expand the first row. Inspect the JSON data.
13. Start VSCode and open the `hyf-movies` folder.

_Roll up your sleeves and let's start coding!_
