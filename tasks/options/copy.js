
module.exports = {
	dev: {
		files: [
			{
			  	cwd: 'src/',
				src: '**', 
				dest: 'build/',
				expand: true,
				filter: 'isFile'
			}
		],
		// This seems to be needed so that copy will not add a "." to the end of every file
		options: {
			punctuation: ''
		}
	},
	prod: {
		files: [
			{
			  	cwd: 'src/',
				src: '**', 
				dest: 'build/',
				expand: true,
				filter: 'isFile',
				punctuation: ''
			}
		],
		options: {
			punctuation: ''
		}
	}
};
