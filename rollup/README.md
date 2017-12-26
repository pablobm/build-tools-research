Just playing around with Rollup.js. This is little more than following the
documentation at https://rollupjs.org.

This demonstrates:

* Bundling of ES6 modules, using the `import` and `export` keywords.
* Tree-shaking: an unused export is not added to the bundle.
* Import of non-ES6 modules from npm (jQuery in this example).
* Simple configuration file `rollup.config.js`.

Install dependencies with:

```
$ yarn
```

Run the build with:

```
$ yarn run build
```
