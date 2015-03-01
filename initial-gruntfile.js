module.exports = function(grunt) {

  grunt.initConfig({
    assemble: {
      // assemble configurations go here
    }
  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['assemble']);

};
