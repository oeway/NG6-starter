import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './<%= name %>.html';
import './<%= name %>.scss';

// controller
export class <%= upCaseName %>Controller {
  'ngInject';
  constructor() {
    this.name = '<%= name %>';
  }
}

// component
export const <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: <%= upCaseName %>Controller,
  controllerAs: '$ctrl'
};

// module
let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])
// url router config
// .config(($stateProvider, $urlRouterProvider) => {
//   "ngInject";
//   $stateProvider
//     .state('<%= name %>', {
//       url: '/<%= name %>',
//       component: '<%= name %>'
//     });
// })
.component('<%= name %>', <%= name %>Component)
.name;

export default <%= name %>Module;
