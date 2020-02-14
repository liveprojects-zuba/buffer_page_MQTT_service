angular.module('app', ['ui.router', 'ng-animate']);
angular.module('app').config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('car_control'),{
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
        templateUrl: 'js/states/car-control/carControlView.html',
        url: '/car_control',
        controller: 'IndexViewCtrl as vm',
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
    }
}