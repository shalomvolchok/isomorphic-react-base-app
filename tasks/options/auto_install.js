
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
		options: {
			cwd: 'build',
			stdout: true,
			stderr: true,
			failOnError: true,
			npm: '--production'
		}
	}
};
