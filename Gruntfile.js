'use strict';

module.exports = function(grunt) {

	grunt.initConfig({		
		
		'css-selector-limit': {
			
			target1: {
				src: 'node_modules/css-selector-limit/tests/**/*.css',
			},
			
			target2: {
				src: 'node_modules/css-selector-limit/tests/**/*.css',
				
				options: {
					limit: 4094
				}
			}
		}
		
	});
	
	grunt.loadTasks('tasks');
	
	grunt.registerTask('default', ['css-selector-limit']);
};