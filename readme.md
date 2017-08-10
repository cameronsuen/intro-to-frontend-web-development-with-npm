Quickstart on Frontend Development with HTML5, ES6, CSS and the JavaScript/NodeJS Ecosystem 
=========================================================================================

Abstract
--------
This document is drafted to help developers get started with frontend development, using newly available APIs/tools empowered new standards such as HTML5, ES6, CSS3 and platforms like NodeJS.  These technologies lead to a fundamental transformation in web.

One phenomenon visible to everyone, including non-developers, is that the web nowadays is more like a collection of applications, rather than a collection of pages.  From social networking sites like Facebook and Twitter, to online collaboration/cloud storage platforms such as Google Docs and Google Drive, the web is now providing services that only desktop applications can provide in the past.  As such, it is only natural that the development of website become more like development of apps than writing pages, and frontend is getting more and more complex, containing data and application logics. 

Table of Content
----------------
* [Introduction](#introduction)
  * [HTML5](#html5)
  * [CSS3](#css3)
  * [JavaScript/ES6](#javascript/es6)
  * [NodeJS](#nodejs)
  * [Relationship with frontend development](#relationship-with-frontend-development)
* [Example](#example)
  * [Boilerplate Setup](#boilerplate-setup)
  * [Transforming ES6 to JavaScript supported by older Browsers](#transforming-es6-to-javascript-supported-by-older-browsers)
  * [Importing packages and bundling JS modules](#importing-packages-and-bundling-js-modules)
  * [Putting the pieces together](#putting-the-pieces-together)
  * [A more convenient way to run scripts with NPM scripts](#a-more-convenient-way-to-run-scripts-with-npm-scripts)

Introduction
------------
### HTML5
HTML5 responds to the change in web by providing capabilities to handle multimedia content such as video, audio and images.  More importantly, it exposes powerful APIs to be used with JavaScript to enable applications to be built.  Examples include canvas for manipulating graphical objects, LocalStorage and SessionStorage for storing sites’ data.  It also removes styling tags such as font to focus on defining the document instead of specifying its appearance.
To get started with HTML5, visit https://www.w3schools.com/html/html5_intro.asp for quickstart and https://developer.mozilla.org/en-US/docs/Web/Guide for a more complete guide and reference.

### CSS3
CSS3 is an update to CSS, including more styling and layout options such as shadows and gradients.  More importantly, it supports media query, which allows websites to define different layouts for devices of different screen widths.  It is used in conjuction with HTML5 to build great-looking apps on all devices, including mobile and desktop.

### JavaScript/ES6
In the past, JavaScript is mainly a scripting language that adds effects to pages.  However, it is now used to power the web application and is becoming more like a traditional programming language like C# or Java.   ES6 (or EcmaScript 2015) is an update to JavaScript to satisfy the increasing demands on web.  Most notable features include classes, module system (import/export), block-scoped declarations, arrow functions etc…, most of which are popular features in programming languages used to build applications.  For an overview of what ES6 provides, visit https://github.com/lukehoban/es6features. 

### NodeJS
NodeJS is simply a platform to run JavaScript, much like what a browser does, just a standalone one.  In addition, like .Net and C#, it has access to large number of APIs, like filesystems, network etc.. that a browser normally does not.  It is similar in nature to a JVM or the .Net framework.

NodeJS is game-changing because it enables developers to do pretty much anything using JavaScript.  For instance, due to the fact that it does not block IO, it becomes a very popular platform for running servers. 

In fact, Node.JS exists before ES6 is standardized, and as a result has its own module system

The great thing is that with the module system is that it empowers developers to build and share packages with one another. That has led to an explosive increase in the number of JavaScript packages for Node.JS 

To manage these packages, Node.JS provides a tool called NPM (Node Package Manager).  **NPM is a tool to manage JavaScript packages**.  One of its greatest advantages is that packages can be installed either globally or locally inside a project.  This allows teams to have different packages in different projects without causing conflicts.  What’s more, the configuration file specifying all dependencies of a project can be shared among team members, allowing them to build systems easily everywhere, even on their own machines, as long as Node.JS (with NPM) is installed

For a list of packages available for installation, please refer to https://www.npmjs.com/, which also includes instructions for installation of packages. 

### Relationship with frontend development
Node.JS is great, but you may wonder how it has to do with frontend development.  After all, frontend JS files run on the browser, not on Node.JS.

There are two reasons why Node.JS means that much to frontend development.  First, let’s remember that NPM is a tool that manage JavaScript packages.  Many javascript packages are actually **isomorphic**, i.e. they could be run on both browsers and Node.JS.  Some of the packages available through NPM are actually designed for browsers, like [**Bootstrap**](http://getbootstrap.com/).  The great thing with JavaScript today is that they have enabled module system, which allows packages, libraries to be installed and used. 

Another important point is that there are many great tools distributed through NPM that would enable better development experience and brings in new features.  For example, many browsers do not yet support new JavaScript syntax like classes, imports and exports.  A popular tool, called [**Babel**](https://babeljs.io/), which is a JS package running on Node.JS, “transpiles” the new JavaScript syntax into old ones that’s compatible with most browsers.  These build tools enable developers to either to use new features, or to better modularize the whole system.  They do not run on browsers, but they contribute a lot to the development process.

For these reasons, a lot of the packages are being used in frontend development, and Node.JS has become an important tool in frontend development as well. 

Example 
-------
### Boilerplate Setup
Things are probably very confusing right now.  Please find below an example which illustrates how things are used together.

To start a new project, create a new folder, let’s say tutorial

Inside that folder, run ```npm init``` to initialize the project.  Enter a few information and type *yes* create a ```package.json``` file, which will be the file containing all the configuration and dependencies information.

Let’s create 3 simple files, ```index.html```, ```index.js``` and ```main.css```.

Now suppose we want to build a todo list.  It seems to be a good idea to use OOP, with TodoItem being a class and the todo list an array of TodoItem.  Let’s do that.

**index.html**
```html
<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="author" content="Cameron Suen">
		<meta name="description" content="Example for the Quickstart to Frontend Development">
		<link rel="stylesheet" href="main.css">
	</head>	
	<body>
		<main>
		  <h1 id="time"></h1>
		  <ul id="todoList">
		  </ul>
		</main>
		<script src="bundle.js" async></script>
	</body>
</html>
```

**main.css**
```css
body {
	margin: 0px;
}

main {
	background-color: #42f486;
	text-align: center;
	padding: 20px;
}

h1 {
	color: #ffffff;
	font-family: sans-serif;
	font-size: 4em;
}

ul {
	list-style: none;
}

li {
	color: #ffffff;
	font-family: sans-serif;
	font-size: 1em;
	font-weight: bold;
	padding: 5px;
}
```

**index.js**
```javascript
class TodoItem 
{
	constructor(task, deadline)
	{
		this._task = task;
		this._deadline = deadline;
	}

	get task()
	{
		return this._task;
	}

	get deadline()
	{
		return this._deadline;
	}
}

(function() {

	// Fetches the ul element called todoList
	const todoList = document.getElementById('todoList');

	const items = [
		new TodoItem('Make an App', '19:00'),
		new TodoItem('Write a Report', '24:00'),
		new TodoItem('Make a Website', '17:00')
	];

	// Maps each TodoItem as a <li> element
	// Callback is written using arrow function
	// Please check the documentaiton if you are not sure
	const listItems = items.map((item) => {
		
		// Create and return the li element
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(item.task + '@ ' + item.deadline);
		return li;

	});

	for (let listItem of listItems) {
		todoList.appendChild(listItem);
	}

})();
```

### Transforming ES6 to JavaScript supported by older Browsers
It runs great on new browsers, but don’t forget that a lot of browsers do not support ES6 classes!   Here’s how Node.JS and NPM comes into play again.

Remember we’ve mentioned that there’s a Node.JS package called Babel that “transpiles” new JavaScript to ones that browsers understood?  Let’s do that right now.  Install babel and a few more dependencies, as instructed on their official website, as follows:

Notice the option ```--save``` installs the package and saves package version in ```package.json```

Now that we have installed babel, create a ```.babelrc``` in the project folder to type in the followings:

```json
{
  "presets": ["env"]
}
```

The “env” presets enable a few configurations for babel.  Let’s leave it there for now.

Run 
```
.\node_modules\.bin\babel *.js -d lib
``` 
on Windows, or 

```
./node_modules/.bin/babel *.js -d lib
```
on Mac/Linux

Check out what’s in the lib folder afterwards.  It’s the same file, but all the ES6 syntax is replaced by older syntax!  Point the ```<script>``` tag in ```index.html``` to the the ones in the lib folder, and you can now run the application on older browsers as well.
```html
<script src="lib/index.js">
```

### Importing packages and bundling JS modules
Now suppose we would like know how much time I have before deadline.  It seems to be tedious to do using standard JS APIs alone.  That’s why we googled for time calculation/formatting libraries and find a library called **moment.js**.  Let's include it in our project.
```
npm install --save moment
```

**Updated index.js**
```javascript
import moment from 'moment';

class TodoItem 
{
	constructor(task, deadline)
	{
		this._task = task;
		this._deadline = deadline;
	}

	get task()
	{
		return this._task;
	}

	get deadline()
	{
		return this._deadline;
	}
}

(function() {

	// Fetches the ul element called todoList
	const todoList = document.getElementById('todoList');

	const items = [
		new TodoItem('Make an App', '19:00'),
		new TodoItem('Write a Report', '24:00'),
		new TodoItem('Make a Website', '17:00')
	];

	// Maps each TodoItem as a <li> element
	// Callback is written using arrow function
	// Please check the documentaiton if you are not sure
	const listItems = items.map((item) => {
		
		// Create and return the li element
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(item.task + '@ ' + moment(item.deadline, 'HH:mm').fromNow()));
		return li;

	});

	for (let listItem of listItems) {
		todoList.appendChild(listItem);
	}

})();
```

Again, the browsers fail us because it doesn’t know how to load and import stuffs properly.  To do that we have to use a Node.JS library called Webpack.  It checks through the files and “imports” stuffs by bundling the necessary files as one big .js file, so the browser does not need to know how to import and export stuff.  Simply do ```npm install --save-dev webpack``` to install webpack.

Again, create a configuration file for webpack called **webpack.config.js**, and put in the following:

**webpack.config.js**
```javascript
module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: 'D:\\tutorial\\'
	},
};
```

Adjust ```path``` to the path of your project folder, or the folder you want your output to be in.

The field ```entry``` defines entry point for webpack to start looking through the source codes.  It is typically your index.js file.  Here we also specify the output filename and folder respectively.

After that, by running ```.\node_modules\.bin\webpack``` command, we could see the bundle.js being generated, which is a single, large .js files, containing both your code and the library you need.

Also remember to change ```<script>``` tag in ```index.html``` again to point to the new .js file.

```html
<script src="bundle.js">
```

### Putting the pieces together
We’re still missing the final piece though.  Our codes bundled in the Webpack is still new ES6 codes that some browsers might not understand.  We have to find a way to use Babel with Webpack. 

We could use **babel-loader** plugin in webpack to transpiles the .js files before bundling.  Use ```npm install --save-dev babel-loader``` to install it and add the following snippet in webpack.config.js:

**Updated webpack.config.js**
```javascript
module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: 'D:\\tutorial\\'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}
		]
	}	
};
```

It enables a new *module*, which is a piece of functionality when files go through webpack.  Whenever files come in, check that whether it is a .js file that is not in ```node_modules``` or ```bower_components``` (which means the files written by ourselves).  If so, pass through the babel-loader with the specified options first.  The bundled file will therefore contains only javascript codes that’s compatible with older browsers.

Of course both Babel and Webpack have many other great features and the usage here is just the tip of an iceberg.  Please go through their websites separately for more use cases. 

### A more convenient way to run scripts with NPM scripts
One  thing you might find troublesome is having to type ```./node_modules/.bin/xxx``` every time to execute a command.  Node.JS provides a great alternative.  Modify the ```package.json``` as follows:

```json
{
  "name": "tutorial",
  "version": "0.0.1",
  "description": "This is a sample project for the quickstart to frontend development",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "Cameron Suen",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-loader": "^7.1.1",
    "babel-polyfill": "^6.23.0",
    "babel-preset-env": "^1.6.0",
    "webpack": "^3.5.1"
  },
  "dependencies": {
    "moment": "^2.18.1"
  }
}
```
In the ```scripts``` section a new command ```build``` which calls webpack.  npm will automatically search for executables in the ```node_modules``` folder so there is no need to specify the complete relative path.

Finally, run ```npm run-script build``` to see the result.  You should see that webpack is executed and ```bundle.js``` is generated as usual.