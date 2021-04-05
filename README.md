# @lblod/ember-vo-webuniversum

Ember addon wrapping [the webuniversum components of Vlaanderen](https://overheid.vlaanderen.be/webuniversum/alle-front-end-componenten).


## Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


## Installation
------------------------------------------------------------------------------

```bash
ember install @lblod/ember-vo-webuniversum
```

## Usage
Examples can be found in the dummy application in `tests/dummy/app/templates/application.hbs`. Run `ember serve` and go to `http://localhost:4200` for a demo.

## Default styles import
`ember-vo-webuniversum` will add the required component styles to the vendor.css file by default. If your project is using Sass you can disable this behavior and import the scss files yourselves. This allows you to import only the styles you need and reduce the final vendor.css file size.

To disable the default styles importing behavior you can add the following to your `ember-cli-build.js` file.

```js
// ember-cli-build.js
// ...
let app = new EmberApp(defaults, {
  '@lblod/ember-vo-webuniversum': {
    'shouldImportComponentCss': false,
  }
});
// ...
```
