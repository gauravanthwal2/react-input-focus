# How to Deploy React App on Github Pages

1. Create a react project 
```javascript
    npx create-react-app your-app
```
2. Deploy it on github

3. Go to ```package.json``` file and add the following
```javascript
    "homepage": "https://gauravanthwal2.github.io/your-project-name",
```
4. Then add these 2 ```script``` in ```package.json``` inside ```script```
```javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```
5. Finally run this line and it will create build folder inside your root directory
```
    npm run deploy
```