'use strict';

var path = require('path');
var fs = require('fs');

module.exports = function (grunt) {

	var config = require('load-grunt-config')(grunt, {
		configPath:  path.join(process.cwd(), "tasks/options"),
		init: true
	});

    // libs
    grunt.loadTasks('tasks');

    // tasks
    grunt.registerTask('default', 'dev');
    grunt.registerTask('dev', ['copy:build','strip_code']);
    grunt.registerTask('build', ['strip_code:prod']);
    
    grunt.initConfig(config);
};

