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
    grunt.registerTask('dev', ['copy:dev','strip_code:dev','auto_install:dev','watch:dev']);
    grunt.registerTask('prod', ['copy:prod','strip_code:prod','auto_install:prod','exec:prod']);
    
    grunt.initConfig(config);
};

