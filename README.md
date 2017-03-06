# NG6-starter简化版

# 快速使用入门

## 安装
* `git clone` 克隆这个git repo.
* 在这个文件夹下面运行 `npm install`

## 使用
### 第一步 构建
运行 `npm run build`

### 第二步 运行并监视修改
运行 `npm run watch`

### 第三步 打开浏览器
测试网页: http://localhost:3000 ，看到测试页面后，可以直接打开编辑器修改代码，保存后页面会自动更新。

另外这个工具包包含另外一个测试工具[browsersync](http://www.browsersync.cn/)， 可以在这里看browsersync的页面: http://localhost:3002

## 如何添加子页面？

### 第一步 按照模板添加一个component
假设component名为 `cifar10`, 运行下面命令：
 `npm run component -- --name cifar10`
 检查 `client/app/components` 文件夹，应该会多一个名为`cifar10`的文件夹。

 具有如下目录结构：
 ```
⋅⋅⋅⋅⋅⋅cifar10/
⋅⋅⋅⋅⋅⋅⋅⋅cifar10.js // controller、component和module的定义文件
⋅⋅⋅⋅⋅⋅⋅⋅cifar10.html // 网页模板文件
⋅⋅⋅⋅⋅⋅⋅⋅cifar10.scss // scss样式定义
⋅⋅⋅⋅⋅⋅⋅⋅cifar10.spec.js // 测试文件，用于后期单元测试
```

### 第二步 添加模块
打开文件`client/app/components/components.js`, 与`Home`类似，在文件头添加`import Cifar10 from './cifar10/cifar10';`, 在`componentModule`中添加依赖`Cifar10`, 添加后的`components.js`文件如下：
```
import angular from 'angular';
import Home from './home/home';
import Cifar10 from './cifar10/cifar10';

let componentModule = angular.module('app.components', [
  Home,
  Cifar10
])

.name;

export default componentModule;
```
### 第三步 修改html和js
运行 `npm run watch` 并保持窗口打开。

开发过程中，在`cifar10.html`中添加需要的html内容，并在`cifar10.js`中修改`Cifar10Controller`这个class。
例如，在`cifar10.html`中，添加一个按钮：
```
<md-button class="square" aria-label="test button" ng-click="$ctrl.sayHello()">
    Hello {{$ctrl.buttonText}}
</md-button>
```
P.S.:在angular material的官网有很多控件的例子可以参考如何写界面：https://material.angularjs.org/latest/demo/button
这个例子里涉及到一个叫`$ctrl.buttonText` 的变量和一个叫`$ctrl.sayHello()` 的函数，我们可以在`Cifar10Controller`这个class中定义和修改它们。例如打开文件`cifar10.js`,可以修改`Cifar10Controller`为：

```
//controller
export class Cifar10Controller {
    constructor() {
      this.buttonText = 'world';
    }
    sayHello(){
        alert('hello world');
        //change 'world' to '!'
        this.buttonText = '!';
    }
}
```
保存后即可看到按钮， 注意这里面函数式如何定义的，变量是如何被修改的。

### 第四步（可选）设置url

打开 `cifar10.js` 文件，取消下面代码的注释然后保存：
```
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('cifar10', {
      url: '/cifar10',
      component: 'cifar10'
    });
})
```
这里定义了一个叫做`cifar10`的状态并分配到`/cifar10`这个url上面。
这样你就可以通过http://localhost:3000/cifar10 看到这个子页面了。

#### 如何在一个导航条上添加一个按钮跳转到这个cifar10的页面？
打开`client/app/common/navbar/navbar.html`, 添加一个按钮：
```
<md-button class="square" ui-sref="cifar10">
    CIFAR10
</md-button>
```
最关键的部分是`ui-sref="cifar10"`这个属性，这样点击这个按钮后就会跳转。

## 如何添加多个页面共用的component？
假设我们要添加一个网页的脚注取名为`footer`.
与添加子页面类似，运行：`npm run component -- --name footer --parent ../common`
这样在`client/app/common`文件夹下面会生成一个新的叫`footer`的文件夹。

因为不需要给一个独立的组件分配url，所以不需要打开url相关的注释。

类似地，打开`client/app/common/common.js`，修改两处将`footer`导入进来并添加到模块的依赖中，修改后的`common.js`应该为：
```
import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

let commonModule = angular.module('app.common', [
  Navbar,
  Footer
])

.name;

export default commonModule;
```

这样，在其他子页面中，就可以直接使用一个叫做`footer`的tag, 比如，可以在`client/app/components/home/home.html`中加入以下内容：
```
<footer> </footer>
```

## 其他信息

Angular Material的例子： https://material.angularjs.org/latest/demo/button
侧边导航条： https://material.angularjs.org/latest/demo/sidenav
Google的图标： https://material.io/icons/
如何debug：可以使用chrome浏览器自带的开发工具，网页出现问题，一般可以在开发工具的console查看中输出的错误信息，具体使用方法Google搜索。

# 原版说明

<p align="center">
  <a href="http://courses.angularclass.com/courses/angular-2-fundamentals" target="_blank">
    <img width="438" alt="Angular 2 Fundamentals" src="https://cloud.githubusercontent.com/assets/1016365/17200649/085798c6-543c-11e6-8ad0-2484f0641624.png">
  </a>
</p>

---

<p align="center">
  <a href="https://angularclass.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/1016365/9864650/93a5660a-5b00-11e5-8716-a0d538d12913.png" alt="ng6-starter" width="480px;" >
  </a>
  <!-- old img url: http://res.cloudinary.com/angularclass/image/upload/v1431802814/ng6_vrmd60.png -->
</p>

# NG6 [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/NG6-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/NG6-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> The de facto starter repo for building scalable apps with [Angular](https://angularjs.org), [ES6](https://git.io/es6features), and [Webpack](http://webpack.github.io/)

This repo serves as a minimal starter for those looking to get up-and-running with Angular and ES6, using [Gulp](http://gulpjs.com/) and [Webpack](http://webpack.github.io/) for the build process.
**This seed is not a Yeoman generator.** It's a minimal starter with tasks for building the boilerplate. **These are its features**:
* The best practice in directory/file organization for Angular (allowing for infinite horizontal app scaling)
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Tasks for generating additional boilerplate Angular components
* A full testing system in place
* [SASS](http://sass-lang.com/) support via node-sass

**Check out the [JSPM version](https://github.com/angularclass/NG6-starter/tree/jspm)--an alternative to Webpack as an ES6 build system.**

> If you're looking for a preliminary [Angular 2](https://angular.io/) build, please use the [angular2-webpack-starter](https://github.com/angularclass/angular2-webpack-starter).
___

# Table of Contents
* [Walkthrough](#walkthrough)
    * [Build System](#build-system)
    * [File Structure](#file-structure)
    * [Testing Setup](#testing-setup)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the App](#running-the-app)
        * [Gulp Tasks](#gulp-tasks)
        * [Testing](#testing)
		* [Generating Components](#generating-components)		
* [Starter Kit Support and Questions](#starter-kit-support-and-questions)

# Walkthrough
## Build System
NG6 uses NPM scripts, Gulp, and Webpack together for its build system. Yes, you don't need Gulp if you're using Webpack. This is true if your build system is only responsible for file manipulation. However, ours is not.

`Webpack` handles all file-related concerns:
* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules
* Doing all of the above for `*.spec.js` files as well

`Gulp` is the orchestrator:
* Starting and calling Webpack
* Starting a development server (yes, Webpack can do this too)
* Generating boilerplate for the Angular app

**Check out the [JSPM version](https://github.com/angularclass/NG6-starter/tree/jspm)--an alternative to Webpack as an ES6 build system.**

## File Structure
We use a componentized approach with NG6. This will be the eventual standard (and particularly helpful, if using
Angular's new router) as well as a great way to ensure a tasteful transition to Angular 2, when the time is ripe.
Everything--or mostly everything, as we'll explore (below)--is a component. A component is a self-contained
concern--may it be a feature or strictly-defined, ever-present element of the UI (such as a header, sidebar, or
footer). Also characteristic of a component is that it harnesses its own stylesheets, templates, controllers, routes,
services, and specs. This encapsulation allows us the comfort of isolation and structural locality. Here's how it
looks:
```
client
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
⋅⋅⋅⋅common/ * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.js * components entry file
⋅⋅⋅⋅⋅⋅home/ * home component
⋅⋅⋅⋅⋅⋅⋅⋅home.js * home entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅home.component.js * home "directive"
⋅⋅⋅⋅⋅⋅⋅⋅home.controller.js * home controller
⋅⋅⋅⋅⋅⋅⋅⋅home.scss * home styles
⋅⋅⋅⋅⋅⋅⋅⋅home.html * home template
⋅⋅⋅⋅⋅⋅⋅⋅home.spec.js * home specs (for entry, component, and controller)
```

## Testing Setup
All tests are also written in ES6. We use Webpack to take care of the logistics of getting those files to run in the various browsers, just like with our client files. This is our testing stack:
* Karma
* Webpack + Babel
* Mocha
* Chai

To run tests, type `npm test` in the terminal. Read more about testing [below](#testing).

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install dependencies

## Running the App
NG6 uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `npm start` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.

### Tasks
Here's a list of available tasks:
* `npm run build`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm run serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `npm run watch`
  * alias of `serve`
* `npm start` (which is the default task that runs when typing `gulp` without providing an argument)
  * runs `serve`.
* `npm run component`
  * scaffolds a new Angular component. [Read below](#generating-components) for usage details.

### Testing
To run the tests, run `npm test`.

`Karma` combined with Webpack runs all files matching `*.spec.js` inside the `app` folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly. The file `spec.bundle.js` is the bundle file for **all** our spec files that Karma will run.

Be sure to define your `*.spec.js` files within their corresponding component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` suffix, you must change the `regex` in `spec.bundle.js` to look for whatever file(s) you want.
`Mocha` is the testing suite and `Chai` is the assertion library. If you would like to change this, see `karma.conf.js`.

### Examples

It's always easier to learn something if you have an examples. Here is a list of repos which based on this starter:

 - [TodoMVC Example App](https://github.com/AngularClass/NG6-todomvc-starter)

### Generating Components
Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components. The component boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅componentName/
⋅⋅⋅⋅⋅⋅⋅⋅componentName.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅componentName.component.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.html
⋅⋅⋅⋅⋅⋅⋅⋅componentName.scss // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅componentName.spec.js // contains passing demonstration tests
```

You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious.
To generate a component, run `npm run component -- --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `client/app/components`. To change this, apply the `--parent` flag, followed by a path relative to `client/app/components/`.

For example, running `npm run component -- --name signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.  

Running `npm run component -- --name footer --parent ../common` creates a `footer` component at `client/app/common/footer`.  

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component names.

# Starter Kit Support and Questions
> Contact us, anytime, regarding anything about this project.

* [Gitter: angularclass/NG6-starter](https://gitter.im/angularclass/NG6-starter)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)

___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? hello@angularclass.com
