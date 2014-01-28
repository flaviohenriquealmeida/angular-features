module.exports = function(grunt) {

	require('load-grunt-tasks')(
		grunt, 
		{
			scope: 'devDependencies', 
			pattern : "grunt-!(template)*"
		}
	);

	grunt.initConfig({

		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			},
		},
	
		nodemon: {
			dev: {
				options: {
					file: 'server/app.js',
					nodeArgs: ['--debug'],
					env: {
						PORT: '3000'
					},
					watchedFolders: ['server'],
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},

			all: {
				files: ['src/**/*']
			}
		}
	});

	grunt.registerTask('server', ['concurrent']);

}