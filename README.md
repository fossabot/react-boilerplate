# React Boilerplate

This is a React boilerplate with a bunch of features including linting for Sass/SCSS and ECMAScript with AirBnB's rules, Webpack Bundling and Minification, Jest Testing, PWA service worker generating, Offline packages with Yarn, and a Node server with Express for hosting.

## Quick Start
1. Clone the Repo.
1. Navigate to the repo directory and install packages with `yarn`.
1. Start the development server with `yarn start`

## Initial Machine Setup
1. **Install [Node 6.x.x or greater](https://nodejs.org)**
1. **Install Yarn with `npm i -g yarn`**
1. **Install [Git](https://git-scm.com/downloads)**. 
1. **[Disable safe write in your editor](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.
1. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.  

**On Linux:**  

 * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).    
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` 

**On Windows:** 

* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

## To Do
- [ ] Update Docker to NGINX and not Node.js
- [ ] Get fix for `why-did-you-update` from [this issue](https://github.com/garbles/why-did-you-update/issues/45).
- [ ] Add `preload-webpack-plugin` once [this issue](https://github.com/GoogleChrome/preload-webpack-plugin/issues/27) is fixed.
- [ ] Add [prepack-webpack-plugin](https://github.com/gajus/prepack-webpack-plugin) when available for Webpack 3.x.

## Technologies

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
| [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
| [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
| [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
| [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [Flow](https://flow.org/)| Static type checker for Javascript | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |

## Docker

### Docker Commands
- Build the Container: `bash ./manage.sh build`
- Run the Container: `bash ./manage.sh start`
- Start a terminal session in the Container: `bash ./manage.sh shell`
- Run a single command in your container: `bash ./manage.sh run <command>`

#### Helpful Commands:
- `docker container exec -it {container_name} /bin/bash` Attach shell.
- `docker image ls` List images.
- `docker container ls` List containers.

## Yarn Offline
To run [Yarn Offline](https://yarnpkg.com/blog/2016/11/24/offline-mirror/) just run `yarn install –offline` in your shell.

## Tools

### Writing Tools
- [Webstorm](https://www.jetbrains.com/webstorm/) (Integrated Development Environment)
- [VS Code](https://code.visualstudio.com/) (Lightweight Desktop Editor)

### Git GUI
- [GitKraken](https://www.gitkraken.com/)

### Fish Shell
1. Download at [fishshell.com/](https://fishshell.com/) and install.
1. Then install oh-my-fish with curl `curl -L https://get.oh-my.fish | fish`.
1. Finally set your theme in a new terminal window with `omf install toaster` and then the command `omf theme toaster`.

### Node version management
- [n](https://github.com/tj/n)

### Dependency Management
- [Yarn](https://yarnpkg.com/en/)

### Docker
- [Docker CE](https://www.docker.com/community-edition)
- [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

### Image Optimization
- [ImageOptim for OS X](https://imageoptim.com/mac)
- [svgo](https://github.com/svg/svgo)

### Chrome Extensions
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

## Integrations/Services

### Backends
- [Graph.cool - GraphQL Database](https://www.graph.cool/)
- [prismic.io - CMS](https://prismic.io/)

### Video Hosting
- [Vimeo](https://vimeo.com/)
