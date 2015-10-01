
module.exports = {
	dev: {
		files: [
			{
			  	cwd: 'src/',
				src: '**/*', 
				dest: 'build/',
				expand: true,
				filter: 'isFile'
			}
		]
	},
	prod: {
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
