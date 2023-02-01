## BARE Node-starter pack

This repo represent a follow through to the "client side app" that you already worked on.

In this exercise you will be working with Nodejs (http://nodejs.org) to create a server that will handle the request from the browser, you will be creating a way to see, store and transform the data you are receiving from the client side.

This sprint is made so you will build up an autonomous problem solving, you need to identify the "what" first before jumping into coding, so a minimum of research is needed for you to start with before even the "how" to implement it.

Push your self to find a path in the middle of unclear road and difficulty to find a solution.

The more hardship you face in this phase the faster your will build a successful software engineer mentality, that can deal with unfamiliar environment and poorly documented tools.

## IN this repo you will find !!

* `server/server/first-server.js` where you server reside you will need a small manipulation to make it work.
follow the comments it will guide you through.

* `server/server/handler.js` it is the main file where you will be working on.

* `server/spec/` has a Jest / mocha server it will be expanded, after you finish the initial part of this repo

## Move in !

your first interaction will be with how to use a function/variables/classes...
From a file to another.

This kind of behavior helps a lot in the separation of concern reusability and better functionality !

so the first file is a play ground on how to use module.exports &/or exports

## Playground

This part is not mandatory, it is made to make you initiate any problem with small steps, we really recommend you to try things separately then go for combination just to see how things can build up and how you can refactor your code to be more efficient and more readable.

Do your best to put some comment and remark here and there, make sure to explain and talk with your colleague about your.

commit your code whenever you finish a playground

## Main work

put your work "front end" in the client side,
you should differentiate between the frontend and the backend
what you have done previously is dealing with data coming from an API, today you will build the interface that deals with the http request from the browser !




## package manager

we will be working with the most common package manager used with node js which is **NPM** to install and keep track of the tools your development environment and server-side code requires

### npm

So here is the big deal about npm

you don't need to manage every external package manually NPM is here for the rescue.

You will use it to install and manage everything !

Let's take a look into how to install a package with npm and the multiple ways of doing it !

### Local Installation

After figuring out witch dependency you need..

you will have to follow this step to install it.

first of all use

``` bash
npm install --save jquery
```

After this command, jquery will be installed in your local machine inside the folder "node_modules"

but how to use it/ import it ?

you just need to use require in your js file since we are in the common.js pattern and not ES6...

``` bash
"const THE_NAME_THAT_YOU_CHOOSE = require('THE_NAME_LIBRARY_THAT_YOU_NEED')"

"const $ = require('jquery')"
```
### Global installation

Many packages that work with the local shell "gitBash ..." need to be installed globally by using `-g` we call them **flags**

> you can't `require` globally installed packages !

> in the rare case where you want to use the package globally and locally you will have to install it both ways !


### package.json

Finally the **package.json** is the place where all your dependency are declared, it takes note of all the package that you have installed and their version !

So first thing after cloning you will have to use the command of **npm install** to download all the needed packages to run your repo.

> we highly recommend to go through the package.json file and understand some key point.(search and destroy)

- scripts
- dependency
- devDependencies


## Starting point / Bare Minimum requirements

### Bare node

>> Create a new branch in your git repo name 'Bare_node_server' and move into it ``git checkout -b Bare_node_server``
>  - **git checkout <branch name>** is for moving from a branch to another
>  - **-b** is a flag that work with checkout to create a new branch

> It is required that you install these visual studio extensions `better comments` and `Hide comments` they will help you visualize your code

Now we are diving into the main sprint

- [ ] use the package manager NPM to install the libraries in the ``package.json`` in your frontend client-side and on your backend server-side


- [ ] check your file `server\first-server.js` and learn how to start an **HTTP** server and how to connect to it with a web browser.

- [ ] use the package manager NPM to install the libraries in your frontend client-side and on your backend server-side

- [ ] apply what you have learned in the playground export/require, to make the function **handler** inside `server\handler.js` work in the file ``server\first-server.js`

- [ ] check your **logs/terminal** and see the output of the server and how you can use them to handle specific request

- [ ] we already gave you an example to map from so take your time understanding it and try to figure out the next step

- [ ] Make all the Mocha tests pass.
    - To run Mocha tests for your Node server, you must run npm `npm install`.
    - Run the tests using `npm test` from the main directory.
    - The tests in `server/spec/ServerSpec.js` expect the `handleRequest` function
      in `server/handler.js` to be defined.

### Express refactor
>Purpose of this session is to learn how to use express.js, to
      - understand what are middleware and their benefits
      - have an opinion why you should use express over bare node

> this session should not be touched until you finish the part of Bare node

> Create a new branch in your git repo name 'Bare_node_server' and move into it ``git checkout -b express-server``
> Create a remote for the Rbk repo ```git remote add rbk [link of the repo]``
> pull from remote ``rbk``

> you will be working in the folder **server-express**

- [ ] go to the express server documentation/website ``https://expressjs.com/`` and try to figure out how to create your server with express

- [ ] modify the ``package.json``[scripts] so you can use the server inside the folder of ``express-server``

- [ ] refactor the Bare node server that you have finished with expressJS

- [ ] Make all the JEST tests pass.
      - Check the ``package.json scripts`` for how to run the test !
      - Make a small comparison between the ``mocha test`` and ``Jest test`` just to have an idea


#### Persist memories/ store data in files

> Create a new branch in your git repo name 'Bare_node_server' and move into it ``git checkout -b express-filesystem-persistency``

 ##### Your goal in this session is to store the data in files !! **not in a variable of type ***[object]***

 - use ``fs`` module to persist data,  inside the blogs file ``check this link`` https://softchris.github.io/pages/javascript-node-io.html !

      - [ ] follow this structure of files to create your individual folder/files

           blogs
            │   ├── index.txt              # the pointer for the indexation/unique ID of a post
            │   ├── allBlogs.json             # one post... contain all blogs
