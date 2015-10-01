module.exports = {
	dev: {
    	files: ["./src/**/*"],
    	tasks: ['copy:dev','strip_code:dev']
	},
	prod: {
    	files: ["./src/**/*"],
    	tasks: ['copy:prod','strip_code:prod']	
	}
};
