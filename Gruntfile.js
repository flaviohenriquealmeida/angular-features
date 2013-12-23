module.exports = function(grunt) {

	require('load-grunt-tasks')(
		grunt, 
		{
			scope: 'devDependencies', 
			pattern : "grunt-!(template)*"
		}
	);

	grunt.initConfig({

		nodemon: {
			dev: {
				options: {
					file: 'server/app.js',
					nodeArgs: ['--debug'],
					env: {
						PORT: '3000'
					},
					watchedFolders: ['server']
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
		},

		parallel: {
			mix: {
				tasks: [
					{ grunt: true, args: ['nodemon']}, 
					{ grunt: true, args: ['watch']}
				]
			}
		}
	});

	grunt.registerTask('server', ['parallel']);

}