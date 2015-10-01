
module.exports = {
	dev: {

		  options: {
		    cwd: 'build',
		    stdout: true,
		    stderr: true,
		    failOnError: true,
		    npm: true
		  }
	
	},
	prod: {
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
