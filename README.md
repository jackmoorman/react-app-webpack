### --------------- React App Using Webpack ---------------
### ------------- React Frontend From Scratch -------------


* --------------------------------------------------------------------
* -------------------- TLDR, SUMMARY RIGHT BELOW: --------------------
* --------------------------------------------------------------------

* REACT APP CREATION PROCESS:

0.  If you forked this repository, just run `npm install` inside this directory to install dependencies. Follow along below for creating a React Application yourself

1.  Create new project directory
2.  `npm init -y`
3.  `npm install react`
4.  `npm install react-dom`
5.  `npm install webpack --save-dev`
6.  `npm install webpack-cli --save-dev`
7.  `npm install webpack-dev-server --save-dev`
8.  `npm install @babel/core --save-dev`
9.  `npm install babel-loader --save-dev`
10. `npm install @babel/preset-react --save-dev`
11. `npm install @babel/preset-env --save-dev`
12. `npm install html-webpack-plugin`
13. In the root directory, create webpack.config.js and format as shown in this template.
14. In the root directory, create a new folder named 'src'
15. Within the 'src' directory, create a file index.js and format as shown in this template.
16. Within the 'src' directory, create a new folder named 'components'
17. Within the 'components' directory, create a file App.js and format as shown in this template.
18. Within the 'src' folder, create a file index.html with boilerplate HTML.
19. In the package.json file, create a "start" script and "build" script as shown in the file. Optionally, you can delete the "test" script.
20. For development mode, run: `npm run start`.
21. For production build mode, run: `npm run build`.
22. Running `npm run build` will create a 'dist' directory with your bundle.js file, a bundle.js LICENSE file, and an index.html for production.


* --------------------------------------------------------------------------
* --------------- OVERVIEW: REACT APPLICATION USING WEBPACK ----------------
* --------------------------------------------------------------------------

* Tools Used:
  -- Webpack, Babel, React, and ReactDOM

* Here we will be setting up a React evnironment. A React environment consists of:

  - Javascript transpiler --- Babel --- :

    * React recommends using the latest version of JS (i.e. using arrow functions) and most browsers do not understand that syntax. A transpiler converts one form of code into another form of code.

  - Module bundler --- Webpack --- :

    * A module bundler takes a bunch of different types of files, such as JavaScript files, images, stylesheets, etc and bundles them into a smaller group of files.
    * Module bundlers are used with React because they help us manage dependency relationships including loading modules in the correct order.
    * Webpack also creates a dependency graph to import modules that are dependent on one another in the correct order.


* --------------------------------------------------------------------------
* ---------- DEPENDENCIES AND LIBRARIES TO BE INSTALLED WITH NPM: ----------
* --------------------------------------------------------------------------

  1.  Create a directory for the project.
  
  2.  In that directory, initialize it as an npm project by running `npm init -y`. This creates the      standard package.json file where the project dependencies are stores.

  3.  Now run `npm install react`. This will install the React library.

  4.  Run `npm install react-dom`. react-dom acts as the 'glue' between React and the DOM.

  5.  Now we will install Webpack, which is our module bundler. We will install all Webpack related dependencies as dev-dependencies using --save-dev.

  6.  Run `npm install webpack --save-dev`

  7.  Run `npm install webpack-cli --save-dev`. This provides a set of commands to increase speed and efficiency when setting up a custom webpack project.

  8.  Run `npm install webpack-dev-server --save-dev`. This will give us a single command to start a server with live reload.

  9.  After all the Webpack development dependencies have been installed, we will move onto our Javascript transpiler, which is Babel.

  10. Run `npm install @babel/core --save-dev`. This 'core' file is our code transpiler.

  11. Run `npm install babel-loader --save-dev`. Loaders are what Webpack uses to handle and process different filetypes. Loaders dictate how certain filetypes should be pre-processed as they are imported and loaded.

    a.  babel-loader specifically transpiles Javascript code. There are different types of loaders, for example: sass-loader transpiles sass files to css, style-loader adds CSS to the DOM using style tags, and there are many more loaders available as well.

  12. Run `npm install @babel/preset-react --save-dev`. This package contains presets for all React plugins. In babel, a 'preset' set of plugins that support language features.

    a.  By default, Babel has the preset ES-2015 which adds support for ES6 JavaScript (i.e. arrow functions)

    b.  The preset 'react' adds support for JSX. 

  13. Run `npm install @babel/preset-env --save-dev`. This is a preset that allows us to use the latest JavaScript without having to manage which syntax transforms are needed by the browser.

    a.  This will also make our JavaScript bundles smaller.

  14. Run `npm install html-webpack-plugin --save-dev`. This library will assist with adding our bundled files to our index.html file.


* -------------------------------------------------------------------
* -------------------- DIRECTORY AND FILE SETUP: --------------------
* -------------------------------------------------------------------

  1.  Create a file in the root directory named webpack.config.js and format as shown in the file.

  2.  Create a folder name 'src' at the top level

  3.  In the 'src' directory, create an index.js file.

    a.  Webpack will see this at the starting point of our application based on the specified entry point in the webpack.config.js file.

  4.  Add some React code to index.js as shown as formatted in the file.

  5.  After index.js has been formatted, within the 'src' folder create another folder named 'components'. Within the 'components' directory, create a file named App.js.

    a.  Format App.js as shown in the file.

  6.  Create the index.html file within the 'src' folder and format it as shown in the file.

  7.  In the package.json file, create scripts to run our application.

    a.  Create a script for development mode with a live-reload server

    b.  Create a script for a production-ready build.

    c.  See package.json file under the "scripts" key. Optionally, the default "test" script can be removed from the file completely.

  8.  Now, running `npm run start` will run the app in development mode.

  9.  Run `npm run build`. This will bundle the application for production mode and create the 'dist' folder with the index.html and bundle.js files inside.