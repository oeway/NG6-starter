import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import template from './app.html';
import 'normalize.css';
import './app.scss';

const appComponent = {
  template,
  restrict: 'E'
};

angular.module('app', [
    uiRouter,
    'ngMaterial',
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', appComponent);
