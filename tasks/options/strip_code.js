module.exports = {
	options: {
		start_comment: "start-dev-only-code",
		end_comment: "end-dev-only-code"
	},
	target: {
	  	files: [
			{
				cwd: 'build/',
				src: '**/*', 
				dest: 'build/',
				expand: true,
				filter: 'isFile'
			},
		]
	}
};
