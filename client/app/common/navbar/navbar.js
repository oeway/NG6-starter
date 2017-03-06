import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './navbar.html';
import './navbar.scss';

//controller
export class NavbarController {
  constructor() {
    'ngInject';
    this.SITENAME = 'AI Gallery';
  }
}

//component
export const navbarComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: NavbarController,
  controllerAs: '$ctrl'
};

//module
let navbarModule = angular.module('navbar', [
  uiRouter
])
// url router config
// .config(($stateProvider, $urlRouterProvider) => {
//   "ngInject";
//   $stateProvider
//     .state('navbar', {
//       url: '/navbar',
//       component: 'navbar'
//     });
// })
.component('navbar', navbarComponent)
.name;

export default navbarModule;
