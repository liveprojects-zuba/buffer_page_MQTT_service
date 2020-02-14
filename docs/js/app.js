// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {
  angular.module('starter', [
    'ui.router',// ADDED for page navigation
    'momentjs', // ADDED used for dates
    'eventsjs',  // ADDED our events module
    'mainjs'// ADDED for our states module
  ])

    .config(function ($urlRouterProvider){
      $urlRouterProvider.otherwise('/events_list');
    })

    .run(function ($state, $rootScope) {
      $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
        
        event.preventDefault();

        $state.get('events_list').error = { code: 123, descriptions: 'Exception stack trace' }
        return $state.go('events_list');
      });

    })
})();
