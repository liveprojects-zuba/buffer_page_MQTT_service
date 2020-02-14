(function () {
    'use strict';

    angular
        .module('eventUpdateState', [
            'ui.router',
            'ngAnimate'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('events_update', {
                    url: '/events_update',
                    templateUrl: 'js/states/event-update/events.update.html',
                    controller: 'eventsUpdateCtrl as vm',
                    cache: false
                });
        });
})();
