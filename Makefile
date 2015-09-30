makefile
 
build: 
	npm install
	npm run build
	npm prune --production
	docker build -t dogestry.in/digitaloptgroup/mywebsite . 
	docker push dogestry.in/digitaloptgroup/mywebsite
