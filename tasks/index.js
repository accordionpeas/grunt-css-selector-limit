'use strict';

var cssSelectorLimit = require('css-selector-limit');

module.exports = function(grunt){

	grunt.registerMultiTask('css-selector-limit', 'Determine whether CSS files contain more selectors than IE\'s limit of 4095', function(){
		
		var done = this.async(),
			warn = false;
			
		cssSelectorLimit(this.filesSrc, this.options(), function(err, results){
			if(err){
				return done(err);
			}
			
			results.forEach(function(result){
				if(!result.ok){
					grunt.log.warn('\n');
					grunt.log.warn(result.file + ' is over the css selector limit.');
					grunt.log.warn('The line number of the first selector that is over the limit is ' + result.line + '.');
					grunt.log.warn('The first selector that is over the limit is "' + result.selector + '".');
					warn = true;
				}
			});
			
			if(warn){
				grunt.fail.warn('CSS selectors are over the limit.');
			}
			else{
				done();
			}
		});
		
	});
	
};