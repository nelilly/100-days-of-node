# 100 Days of Node
A Node.js curriculum for 100 days of code. A [100 Days of Code](https://www.100daysofcode.com/) challenge, strictly focusing on Node and Node-adjacent code.

I created this repository to learn the breadth and depth of Node. It became a source to help other developers learn more about using Node. Spend 100 days learning all about the in and outs of Node; what it can do; and where it's the best (and worst) technology to solve any particular challenge.

Any suggestions for little programs, code challenges, or applications that can showcase different features and abilities of Node that could be added to this list would be greatly appreciated...

## The 100 Days of Node list (so far)
<!-- 
## Topics that I don't know how to work into a small application or code challenges, yet:
- Using Node Locally (Name some additional reasons to use Node locally)
- Asynchronous Patterns
- Advanced Streams
- HTTP Streams
- ???
-->
0. ["Hello World"](#000-hello-world)
1. [Read environment variables from Node.js](#001-read-env-variables)
1. [Write a script that adds two numbers](#002-write-a-script-that-adds-two-numbers)
1. [Use the Node REPL](#003-use-the-node-repl)
1. [Accept arguments from the command line](#004-accept-arguments-from-the-command-line)
1. [Explore console commands](#005-explore-console-commands)
1. [Accept input on the command line](#006-accept-input-on-the-command-line)
1. [Use node import/export modules](#007-use-node-import-export-modules)
1. Write an application that uses the Event Loop
1. Write an application that uses Timers
1. Write an application that uses Asynchronous Programming and Callbacks
1. Write an application that uses Promises
1. Write an application that uses Async and Await
1. Write an application that uses the Node Event emitter
1. Write a text-based Choose Your Own Adventure
1. Write a text-based RPG combat module
1. ? Errors: Error Handling in Node
1. NPM: An introduction to npm
1. NPM: Manage NPM Packages
1. NPM: Update all the Node dependencies to their latest version
1. NPM: Semantic Versioning
1. NPM: Write an NPM Module
1. NPM: Understanding package.json
1. NPM: Understanding package-lock.json
1. NPM: Work with global packages
1. NPM: Link global packages
1. NPM: Install npx: Node Package Runner
1. CRUD: Writing Local Files
1. CRUD: Reading Local Files
1. CRUD: Delete Local Files
1. CRUD: Accessing Directories
1. CRUD: Find Local Files
1. Server: Build a Web Server without Express?
1. Server: Build a Webserver with Express
1. HTTP Module: Make a GET request
1. HTTP Module: Create a web server
1. HTTP Module: Create a file server
1. HTTP Module: Collect POST Data
1. Socket: Create a Web Socket
1. Socket: Broadcast messages with WebSocket
1. Socket: Create a WebSocket with Socket.io
1. Socket: Emit Socket.io Events
1. Socket: Serve a static File
1. Socket: Create your browser app
1. Socket: Create a get message service
1. Socket: Create a post message service
1. Socket: Connect to Socket.io from the browser app
1. Socket: Create a Socket.io event
1. Streams: ?
1. DB: Set up MongoDB
1. DB: Mongo CRUD, Create
1. DB: Mongo CRUD, Read
1. DB: Mongo CRUD, Update
1. DB: Mongo CRUD, Delete
1. DB: SQL CRUD, Create
1. DB: SQL CRUD, Read
1. DB: SQL CRUD, Update
1. DB: SQL CRUD, Delete
1. Testing: Write Node tests with Jest
1. Testing: Write Node tests with Jasmine
1. Testing: Write Node tests (HTTP) with Supertest
1. Microservice: Make a Catalog Service
1. Microservice: Make a Promotions Service
1. Microservice: Make an A/B Testing Service
1. Microservice: Shopping Cart Service
1. Microservice: Authentication Service
1. Microservice: Using AWS/Serverless & Node.js Lambda
1. Node Deployment: Set up Heroku
1. Node Deployment: Set up AWS Beanstalk
1. Node Deployment: Set up Azure
1. Node Deployment: Set up Jenkins CI/CD
1. Node Deployment: Set up Travis CI/CD
1. Node Deployment: Set up Cirrcle CI/CD
1. Node IoT: Real-Time Temperature Logging with Arduino, Node, and Plotly
1. Node IoT: The Arduino Experimenter's Guide to Node.js
1. Node IoT: Controlling a MotorBoat using Arduino and Node
1. Node IoT: Cylon Arduino module?
1. Node IoT: Arduino Node.js RC Car Driven the HTML5 Gamepad API
1. Node IoT: How to Control Philips Hue Lights from an Arduino
1. Node IoT: Easy Node.js and Web Sockets LED for Raspberry Pi
1. Node IoT: Heimcontrol.js: Home Monitoring with Raspberry Pi and Node.js
1. Node IoT: Build Your Own Smart TV usinf Node.js, Raspberry Pi, and Sockets.io
1. Node IoT: Building a Garage Door Opener with Node and MQTT Using and Intel Edison
1. Node IoT: Amazon's Guide to Make Your Own Raspberry Pi Alexa Device
1. Node IoT: Interactive Smart Mirror
1. Node Desktop: Use Electron
1. ???

101\. Profit!

### 000 "Hello World"
- [Install Node.js](https://nodejs.org/en/download/)
- Write "Hello World"

Let's start with an easy win! 
1. Install Node.js
1. Create a directory named `000`
1. Create a script named `hello-world.js`
1. Import `http` with `require`
1. Serve a text respons of `Hello World` to port `8124`
1. Console.log an message saying what port is running

### 001 Read env variables
1. Create a directory named `001`
1. Create a script named `env.js`
1. Console.log the values of `process.version` and `process.env`

### 002 Write a script that adds two numbers
1. Create a directory named `002`
1. Create a script named `add.js`
1. Write a function that adds two numbers
1. Console.log the results of adding two numbers

### 003 Use the Node REPL
REPL stands for `Read Evaluate Print Loop`. The REPL session provides a way to quickly test simple JavaScript code.

1. Create a directory named `003`
1. Create a script named `repl.js`
1. Write a script that enters a REPL session
1. Have the script console.log a message on exiting the REPL session
1. Run your REPL script
1. Console.log the `global` variable
1. Add a variable to the `global` variable
1. Console.log your new variable

### 004 Accept arguments from the command line
Adding arguments into your node command (`node arguments.js env=dev`) will add them as strings to the `process.argv` array.

1. Create a directory named `004`
1. Create a script named `arguments.js`
1. Write a script to console.log all of the arguments passed in, but only the arguments that you pass in
1. Run a command that passes in multiples arguments such as: `node 004/arguments.js name=nathan surname=lilly devMode=test singularArg`

### 005 Explore console commands
There is a built in `console` command in Node, much like you'd find in the browser.

1. Create a directory named `005`
1. Create a script named `console.js`
1. Write a script using the log method with variables passed in `console.log('My %s has %d ears', 'cat', 2)`
1. Use the count method several times
1. Use the clear method
1. Use the count method at least one more time
1. Reset the count
1. Print the stack trace
1. Print an error message with an error code
1. Print a table
1. Measure the time from the first console event to the end of the console events

### 006 Accept input on the command line
1. Create a directory named `006`
1. Create a script named `input.js`
1. Ask three questions and print their input
1. Use a conditional to check the answer for at least one of the questions

### 007 Use node import/export modules
1. Create a directory named `007`
1. Create a script named `import.js`
1. Create a script named `export.js`
1. Write an object into `export.js`
1. Import the contents of `export.js` into `'import.js` and log it to the console
1. Add a function to the object
1. Import and use the function

## Resources
- [Node Documentation](https://nodejs.org/api/)
- [Learn Node.js - Full Tutorial for Beginners](https://www.youtube.com/watch?v=RLtyhwFtXQA) (video), freeCodeCamp
- [Learning Node, 2nd Edition](https://oreilly.com/library/view/learning-node-2nd/9781491943113/), O'Reilly
- [The Definitive Node.js Handbook](https://www.freecodecamp.org/news/node-js-handbook/), freeCodeCamp
