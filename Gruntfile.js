module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint:{
			options:{
				curly:true
			},
			'<%= pkg.name %>':{
				src:['src/js/**/*.js']
			}
		},

		concat:{
			options:{
				
			},
			dist:{
				src: ['src/js/file1.js', 'src/js/file2.js'],
				dest: 'dest/build.js'
			}
		},
		uglify:{
			build:{
				src:'dest/build.js',
				dest: 'dest/build.min.js'
			}
		}	

	});

	

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};