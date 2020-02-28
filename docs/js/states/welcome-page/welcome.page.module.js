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
                    url: '/index?uuid&brokerHost&brokerPort&username&password&ssl',
                    params: {
                        uuid: {
                            dynamic: false
                        },
                        brokerHost: {
                            dynamic: false
                        },
                        brokerPort: {
                            dynamic: false
                        },
                        username: {
                            dynamic: false
                        },
                        password: {
                            dynamic: false
                        },
                        ssl: {
                            dynamic: false
                        }
                    },
                    templateUrl: 'js/states/welcome-page/welcome.page.html',
                    controller: 'welcomeController as vm',
                    resolve: {
                        broker: ['$stateParams', 'brokerDetails', function ($stateParams, brokerDetails) {

                            if ($stateParams.uuid) brokerDetails.UUID = $stateParams.uuid;
                            if ($stateParams.brokerHost) brokerDetails.HOST = $stateParams.brokerHost;
                            if ($stateParams.brokerPort) brokerDetails.PORT = $stateParams.brokerPort;
                            if ($stateParams.username) brokerDetails.USERNAME = $stateParams.username;
                            if ($stateParams.password) brokerDetails.PASSWORD = $stateParams.password;
                            if ($stateParams.ssl) brokerDetails.SSL = ($stateParams.ssl.toLowerCase() == 'true');
                        }]
                    }
                })
            $urlRouterProvider.otherwise('/welcome_page');
        });
})();