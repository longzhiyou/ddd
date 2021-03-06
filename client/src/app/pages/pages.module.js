/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
     // 'BlurAdmin.pages.setting',
    //'BlurAdmin.pages.products',
    'BlurAdmin.pages.customers'

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider ) {
    $urlRouterProvider.otherwise('/dashboard');


  }

})();
