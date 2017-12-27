Result of my first contact with [Broccoli.js](http://broccolijs.com/).  This
takes SASS and ES6 files as inputs and produces concatenated CSS/ES5 output,
with help from [Browserify](http://browserify.org/). It is also able to import
NPM dependencies into the build.

For more details, read my article on this topic: [A simple asset pipeline with
Broccoli.js](http://blog.pablobm.com/post/156209309183/a-simple-asset-pipeline-with-broccolijs)

Install dependencies with:

```
$ yarn
```

Run the build with:

```
$ yarn run build
```

Or run a development server with:

```
$ yarn run serve
```

The resulting app will be served at http://localhost:4200
