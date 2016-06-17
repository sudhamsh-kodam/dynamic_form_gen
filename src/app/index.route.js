(function() {
  'use strict';

  angular
    .module('samplePro')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs:'main'
      })
      .state('generated-form',{
        url:'/generated-form',
        templateUrl : 'app/main/views/generated-form.html',
        controller: 'generatedFormCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
