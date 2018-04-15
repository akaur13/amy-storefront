# Amy-shopfront

 This repo is for Amy-shopfrontgit, including only frontend files, like html, javascript, css, images etc.

## Preconfig

Before you clone this repo, you need to install the latest node.js, currently it is v6.3.1.

After Node.js is installed, execute the commands below to install bower and gulp-cli:
```
npm install bower -g

npm install gulp-cli -g
```
Install ruby and sass, because we use sass as the css preprocessor.
Follow http://sass-lang.com/install to install sass.

Clone the repository, and go to the root folder of this repo, and run the commands below to install packages.
```
npm install

bower install
```

## How to run dev mode locally
In cmd, go to the folder of the repo, and type

```
gulp
```
Then you will see gulp launches a http server, and also launches browser with login page.
Gulp also watches your file change and refreshes the browser automatically.

Note: you do NOT have to run gulp build before you run dev mode.

## How to run unit test
```
gulp test
```
It will launch a server, run the tests and watch your file change under /test/spec folder.

## How to build dev
If you want to publish release to test environment, you can run the task below.
This build will NOT enable google analytics feature. Then files will be built into dist folder.

```
gulp build:dev
```

## How to build product
If you want to publish release to production environment, you should run the task below.
This build will enable google analytics feature.

```
gulp build:prod
```

## How to run prod mode
After build, run
```
gulp serve:prod
```
Then manually open the browser and go to http://localhost:9000/

## How to run end-to-end test

Install protractor and update web-driver
```
npm install -g protractor
webdriver-manager update
```
Run product
```
gulp serve:prod
```
open a new cmd and run end-to-end test
```
gulp e2e
```

## How to generate resource bundle(i18n)
```
gulp i18n
```
messages.en_us.js will be generated in .tmp. We can give the file to language specialist and translate it to other languages and put the translation back to language.service.js

## How to hack endpoint address (and every thing in runtime)
app/scripts/hack/hack.run.js is the file which can almost change anything when application starts.
Now it has a function configEndpoint where developers can point the endpoint to other servers.

Note that this file will run in dev mode only, Which means it will not be built in production.

If you want to untrack this file in your git, try this command
```
git update-index --assume-unchanged app/scripts/hack/hack.run.js
```

If you want to track it again, try
```
git update-index --no-assume-unchanged app/scripts/hack/hack.run.js
```
