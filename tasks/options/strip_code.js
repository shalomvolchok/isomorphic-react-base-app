module.exports = {
	strip_code: {
		options: {
			start_comment: "start-dev-only-code",
			end_comment: "end-dev-only-code"
		},
		target: {
		  	files: [
				{
					cwd: 'prod/',
					src: '**/*', 
					dest: 'prod/',
					expand: true,
					filter: 'isFile'
				},
			]
		}
	} 
};
