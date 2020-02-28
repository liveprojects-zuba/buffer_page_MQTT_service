(function () {
    'use strict';

    angular
        .module('carControlState', [
            'ui.router',
            'ngAnimate'
        ])

        .config(function ($stateProvider, $urlRouterProvider){
            $stateProvider
                .state('car_control', {
                cache: false,
                url: '/car_control',
                templateUrl: 'js/states/car-control/carControlView.html',
                controller: 'carControlView as vm',
            })
        });
})();