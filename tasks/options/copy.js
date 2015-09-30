module.exports = {
	copy: {
		target: {
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
	}
};
