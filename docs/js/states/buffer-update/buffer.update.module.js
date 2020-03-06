(function () {
    'use strict';

    angular
        .module('bufferPageState', [
            'ui.router',
            'ngAnimate'
        ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('buffer_page', {
                    cache: false,
                    url: '/buffer_page',
                    templateUrl: 'js/states/buffer-update/buffer.update.html',
                    controller: 'bufferPageView as vm',
                })
        });
})();