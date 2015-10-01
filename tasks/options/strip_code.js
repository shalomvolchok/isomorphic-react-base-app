module.exports = {
		dev: {
		  	files: [
				{
					cwd: 'build/',
					src: '**/*', 
					dest: 'build/',
					expand: true,
					filter: 'isFile'
				},
			],
			options: {
				start_comment: "__PROD__",
				end_comment: "__END_PROD__"
			}
		},
		prod: {
		  	files: [
				{
					cwd: 'build/',
					src: '**/*', 
					dest: 'build/',
					expand: true,
					filter: 'isFile'
				},
			],
			options: {
				start_comment: "__DEV__",
				end_comment: "__END_DEV__"
			}
		}
};
