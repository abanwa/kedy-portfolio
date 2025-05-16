# React + Vite

i installed "npm install gh-pages --save-dev" 
i made it a devDependency

Then i went to my vite.config.js file and added the base of the project to the defineConfig({base: "/kedy-portfolio"})
The base is the name of the repository in my github

Then i went to my package.json and added a field called "homepage" and the value is the link to our website on github where it is hosted. That is,
"homepage":"https://abanwa.github.io/kedy-portfolio"

Then i will add a command to my package.json script. i named it "predeploy". the command will run "npm run build" and i also added the "deploy" command which will tell the github to deploy the file in our dist folder after we have run the npm run predeploy to run the "npm run build" 
"scripts": {
    "dev":"...",
    "build":"...",
    "predeploy":"npm run build",
    "deploy":"gh-pages -d dist"
}

Then we add our .env to the .gitignore file so that we will not publish our environment varaibles