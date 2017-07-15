# React Boilerplate

This is a React boilerplate with a bunch of features including linting for Sass/SCSS and ECMAScript with AirBnB's rules, Webpack Bundling and Minification, Jest Testing, PWA service worker generating, Offline packages with Yarn, and a Node server with Express for hosting.

## Quick Start
1. Clone the Repo.
1. Navigate to the repo directory and install packages with `yarn`.
1. Start the development server with `yarn start`

## To Do
- [ ] Get fix for `why-did-you-update` from [this issue](https://github.com/garbles/why-did-you-update/issues/45).
- [ ] Add `preload-webpack-plugin` once [this issue](https://github.com/GoogleChrome/preload-webpack-plugin/issues/27) is fixed.
- [ ] Add [prepack-webpack-plugin](https://github.com/gajus/prepack-webpack-plugin) when available for Webpack 3.x.

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
