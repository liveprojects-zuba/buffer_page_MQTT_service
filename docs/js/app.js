// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {
  angular.module('starter', [
    'ui.router',// ADDED for page navigation
    'momentjs', // ADDED used for dates
    'eventsjs',  // ADDED our events module
    'eventUpdateState',// ADDED our update page(state)
    'eventsListState', // ADDED our list page(state)
    'eventsDetailState', // ADDED our detail page(state)
    'welcomePageState', //ADDED our welcome page(state)
    'app' //ADDED our car control page (state)
  ])

    .run(function ($state, $rootScope) {
      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);

        event.preventDefault();

        //$state.get('welcome_page').error = { code: 123, descriptions: 'Exception stack trace' }
        return $state.go('events_list');
      });

    })
})();
