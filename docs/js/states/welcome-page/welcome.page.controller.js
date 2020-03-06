(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('welcomeController', control);

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
        var vm = angular.extend(this, {
            names : []
         });

        vm.channels = Array.apply(null, {
            length: 2
        }).map(Function.call, Number);;
        vm.channel = 0;

        vm.go = go;
        
        function go(valid) {
            if (!valid) {
                alert("Invalid Details")
            } else {
                $state.go('buffer_page');
            }
            /*if (!valid) {
                alert("Invalid Details")
            } else {
                mqttService.initialize(brokerDetails.HOST, brokerDetails.PORT);
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
                        $state.transitionTo('car_control',
                            {
                                channel: vm.channel,
                            });
                    } else if (error) {
                        console.log(error)
                        alert(`Could Not Connect to ${brokerDetails.HOST}:${brokerDetails.PORT}`)
                    }

                }, mqttOptions)
            }*/
        }
        
        /*vm.onItemSelected = function(index){
            console.log("Item : " + index);

            // we're passing parameters into the new state
            // 'selected is an attribute in a parameter object, defined in the module definition
            // I'm going to write the destination controller, so it knows to look for an object with a 'selected' attribute
            $state.go('events_detail', {selected: index});
        }

        vm.noEvents = function(){
            return vm.names.length === 0;
        }

        vm.names = eventsSrvc.getEvents();    */
    }
})();
