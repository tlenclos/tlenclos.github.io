module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'build/script.min.js'
      }
    },
    recess: {
        dist: {
            options: {
                compile: true,
                compress: true
            },
            files: {
                'build/styles.css': [
                    'css/icons.css',
                    'css/pure-min.css',
                    'css/style.css'
                ]
            }
        }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recess');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'recess']);

};
