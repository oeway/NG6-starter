import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './home.html';
import './home.scss';

//controller
export class HomeController {
  constructor() {
    this.name = 'home';
  }
  sayHello(){
      alert('hello world');
  }
}

//component
export const homeComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: HomeController,
  controllerAs: '$ctrl'
};

//module
let homeModule = angular.module('home', [
  uiRouter
])

//urlRouter config
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
.name;

export default homeModule;
