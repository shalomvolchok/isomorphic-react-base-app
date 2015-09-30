var grunt=require("grunt");
var pkg = grunt.file.readJSON('package.json');

module.exports = {
	"build": {
		files: [
			{
			  	cwd: 'src/',
				src: '**/*', 
				dest: 'build/',
				expand: true,
				filter: 'isFile'
			}
		]
	}
};
