module.exports = function(grunt) {

	require('load-grunt-tasks')(
		grunt, 
		{
			scope: 'devDependencies', 
			pattern : "grunt-!(template)*"
		}
	);

	grunt.initConfig({

		bower: {
    		install: {
	      		options: {
		        	targetDir: 'vendor',
		        	layout: 'byType',
		        	install: true,
		        	verbose: true,
		        	cleanTargetDir: true,
		        	cleanBowerDir: true,
		        	bowerOptions: {}
	      		}
    		}
  		}
	});
}