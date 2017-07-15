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
- Restructure (_refactor_) our code as it get more complex
- Get a peek at a related **Node** application

Note that the way we dynamically create DOM elements today is not they way you will do it in later modules. In the React course you will learn far more advanced ways of manipulating the DOM.

## Prerequisites

1. Git command line (Git Bash on Windows)
2. Node (check for recent version)
3. VSCode
4. eslint (`npm install -g eslint`)
5. Google Chrome browser

## Preparations

1. Install the repo:

    ```
    cd <project folder>
    git clone https://github/remarcmij/hyf-movies.git
    cd hyf-movies
    npm install
    npm start
    ```

2. Start your browser and type the following in the address bar:

    ```
    http://localhost:3000/movies
    ```

    This is the JSON data that we will be working with in this hands-on.

3. Open `index.html` and inspect it's contents.
4. Open File Explorer (Windows) or equivalent on Mac or Linux and go to the `hyf-movies` folder.
5. Double-click the `index.html` file to open it in the browser.
6. Open Chrome Developer Tools (click on the three horizontal dots in the menu bar and select _More Tools_, _Developer Tools_).
7. Refresh the page in Chrome.
8. Switch to the network tab in Developer tools.
9. Inspect the `movies` row. Note the `XHR` type.
10. Click on `movies` row.
11. Skim through the Headers.
12. Select the Preview tab.
13. Inspect the server response.
14. Expand the first row. Inspect the JSON data.
15. Start VSCode and open the `hyf-movies` folder.

_Roll up your sleeves and let's start coding!_