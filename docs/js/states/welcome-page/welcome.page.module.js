(function () {
    'use strict';

    angular
        .module('welcomePageState', [
            'ui.router',
            'ngAnimate'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('welcome_page', {
                    cache: false,
                    url: '/welcome_page',
                    templateUrl: 'js/states/welcome-page/welcome.page.html',
                    controller: 'welcomeController as vm'
                })
            $urlRouterProvider.otherwise('/welcome_page');
        });
})();