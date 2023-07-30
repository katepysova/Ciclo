# Ciclo - landing page

Doesn't support mobile layout. See demo deployed on Github Pages [Demo](https://katepysova.github.io/Ciclo/).

## Installation

1. Clone this repo or downloand zip:

   `git@github.com:katepysova/Ciclo.git`

2. Change your current directory to this project directory.

3. `npm install`

4. `npm run prepare` - to install git pre-commit hook. Does not work not in a git repository.

5. `git add .husky/pre-commit` - to add git pre-commit hook.

## How to run

- `npm run dev` - to start the app on the localhost.

- `npm run dev` - to build the app.

- `npm run deploy` - to deploy the app on the GitHub Pages. See more info [here](https://medium.com/superhighfives/deploying-to-github-pages-with-gulp-c06efc527de8).

## Additional

`npm run format` - to format and lint the code.

### Stack

- HTML5;
- SCSS;
- JS (ES6);
- Gulp.

### How to fix dependency issue with `gulp-gh-pages`:

Found the fix to this error!

1. After you install gulp-gh-pages using npm, navigate to the below folder

`node_modules\gulp-gh-pages\node_modules`

2. delete `gift` folder under `gulp-gh-pages`

3. Run `npm install gift --save-dev`
