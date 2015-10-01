
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
