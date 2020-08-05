# Node.JS Simple user authentication

This is a dead simple user authentication implementation using Node.JS, Express as a web server and bycript as a hash generator.

### Tech
This application is built using:
- [Node.JS](https://nodejs.org/) - JavaScript runtime
- [Express.JS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [bycript](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords
- [VSCode REST Client](github.com/Huachao/vscode-restclient) - REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.


# Installation and usage
This application requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and then run the application:

```sh
$ cd nodejs-simple-auth
$ npm install
$ npm run start
```

After running the application, assuming you have [VSCode REST Client](github.com/Huachao/vscode-restclient) installed, simply open 

```sh
req.rest
```
and run the HTTP requests. If you do not use VSCode, you can use Postman to test the application's routes...