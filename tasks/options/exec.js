
module.exports = {
	dev: {
		cmd: 'cd build/; NODE_ENV=development node server.js'
	},
	prod: {
		cmd: 'cd build/; npm run build'
	}
};
