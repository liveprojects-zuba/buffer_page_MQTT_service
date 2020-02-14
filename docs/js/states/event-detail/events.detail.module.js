(function () {
    'use strict';

    angular
        .module('eventsDetailState', [
            'ui.router',
            'ngAnimate'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('events_detail', {
                    cache: false,
                    url: '/events_detail',
                    templateUrl: 'js/states/event-detail/events.detail.html',
                    params: { 'selected': 0 },
                    controller: 'eventsDetailCtrl as vm'
                })
        });
})();
