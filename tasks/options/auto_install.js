
module.exports = {
	dev: {
		local: {},
		subdir: {
		  options: {
		    cwd: 'build',
		    stdout: true,
		    stderr: true,
		    failOnError: true,
		    npm: ''
		  }
		}
	},
	prod: {
		local: {},
		subdir: {
		  options: {
			cwd: 'build',
			stdout: true,
			stderr: true,
			failOnError: true,
			npm: '--production'
		  }
		}
	}
};
