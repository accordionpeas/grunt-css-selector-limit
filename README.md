# grunt-css-selector-limit

> Grunt plugin for detecting if any CSS file in a set has more selectors than IE's limit of 4095. Wraps css-selector-limit module.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-selector-limit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-selector-limit');
```

## The "css-selector-limit" task

### Overview
In your project's Gruntfile, add a section named `css-selector-limit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	'css-selector-limit': {
		target: {
			src: 'style/**/*.css'
		}
	}
});
```

### Options

All options are the same as those defined in the [css-selector-limit module]('https://github.com/accordionpeas/css-selector-limit').

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).