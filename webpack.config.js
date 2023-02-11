const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/*  IMPORTANT THINGS TO NOTE:
 *  --  In the rules section below where we tell Babel
 *      to transpile all files with a .js extension,
 *      if you want to include .jsx files, make sure
 *      you include that with the .js so Babel knows
 *      to transpile those as well.
 * 
 *  --  If you are making calls to the backend via
 *      a REST API, make sure to set up a proxy
 *      from your localhost:PORT# to the routes
 *      you have created in ExpressJS.
 * 
 *  --  For more information on configuring webpack
 *      with the backend, view the unit-10-databases
 *      webpack.config.js file in the devServer
 *      property, this contains the proxy object,
 *      shows how to render static HTML files,
 *      manually changing PORT number, etc.
 */     

module.exports = {

  // we need to specify where the entry point of our application is, which is where our application begins. We want the entry point to be index.js and set its source accordingly.
  // the 'entry' key tells Webpack which file it should use to create a dependency graph.
  // a dependency graph is used to resolve modules that are dependent on one another (i.e. building the modules that others rely on first.)
  entry: './src/index.js',

  // this tells Webpack the name and location of the bundled file that will be generated when we produce a production build of the application.
  output: {
    // when the bundle.js file is created, we want it to be created in the 'dist' folder
    path: path.join(__dirname, '/dist'),
    // this tells Webpack to turn all of our Javascript files into one file: bundle.js
    filename: 'bundle.js'
  },

  // here the html-webpack-plugin is being added, with the plugins being an array of different plugins.
  plugins: [
    // this pluging tells Webpack to inject the bundled files it generates into an HTML file called index.html inside of the 'src' folder.
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // this is informing Webpack of the loader used in the application.
  // what we pass into our module determines how different types of modules will be treated.
  module: {
    // the rules key specifies how the module is created.
    rules: [
      // each object in the array is a rule
      // this rule says to use Babel to transpile all files that end in .js
      {
        test: /.js$/,
        // we want to exclude any files located in node_modules.
        exclude: /node_modules/,
        // Now specify what to do this with (Babel)
        use: {
          loader: 'babel-loader',
          // in options, this says to use babel-loader to transpile our JS files using the preset-env and preset-react presets that are installed.
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }

}