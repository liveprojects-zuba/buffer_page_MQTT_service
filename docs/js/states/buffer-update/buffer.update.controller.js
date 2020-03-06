(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('bufferPageView', control);

    control.$inject = [
        '$scope',
        '$state',
        '$stateParams',
        'mqttService',
        'brokerDetails',
        'eventsSrvc'
    ];

    function control(
        $scope,
        $state,
        $stateParams,
        mqttService,
        brokerDetails,
        eventsSrvc
    ) {
        mqttService.initialize(brokerDetails.HOST, brokerDetails.PORT);

        console.log(brokerDetails);

        mqttService.onConnectionLost(function () {
            console.error("connection lost");
        });

        var mqttOptions = {};

        if (brokerDetails.SSL) { mqttOptions.useSSL = brokerDetails.SSL; }
        if (brokerDetails.USERNAME) {
             mqttOptions.userName = brokerDetails.USERNAME;
            if (brokerDetails.PASSWORD) {
                mqttOptions.password = brokerDetails.PASSWORD;
            }
        }

        mqttService.connect(function (success, error) {
            if (success) {
                $state.go('car_control',
                    {
                        channel: vm.channel,
                    });
            } else if (error) {
                console.log(error)
                alert(`Could Not Connect to ${brokerDetails.HOST}:${brokerDetails.PORT}`)
            }

        }, mqttOptions)  
    }
})();