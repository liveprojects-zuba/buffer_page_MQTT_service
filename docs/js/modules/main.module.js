(function () {
  'use strict';

  angular
    .module('mainjs', [])
    .config(function ($stateProvider) {
      $stateProvider
        .state('events_list', {
          cache: false,
          url: '/events_list',
          templateUrl: 'js/states/event-list/events.list.html',
          controller: 'eventsListCtrl as vm'
        })
        .state('events_update', {
          cache: false,
          url: '/events_update',
          templateUrl: 'js/states/event-update/events.update.html',
          controller: 'eventsUpdateCtrl as vm'
        })
        .state('events_detail', {
          cache: false,
          url: '/events_detail',
          templateUrl: 'js/states/event-detail/events.detail.html',
          params: { 'selected': 0 },
          controller: 'eventsDetailCtrl as vm'
        })
    });
})();
