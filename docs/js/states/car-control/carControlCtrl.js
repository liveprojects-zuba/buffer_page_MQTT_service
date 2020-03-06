(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('carControlView', control)

    
    control.$inject = [
        '$scope',
        '$state',
        '$stateParams',
        'mqttService',
        'brokerDetails'
    ];

    function control($scope, $state, $stateParams, mqttService, brokerDetails) {
        var vm = this;

        var changed = false;

        var channel = $stateParams.channel;

        const DEFAULT_THROTTLE = 0;

        /*
         throttle : is the throttle percentage the user is demanding.
         actualThrottle : is the throttle percentage the real world car is at.
         resources : is the array holding the available special weapons
        */
        vm.throttle = DEFAULT_THROTTLE;
        vm.actualThrottle = DEFAULT_THROTTLE;
        vm.resources = [];

        vm.targetChannels = Array.apply(null, {
            length: 3
        }).map(Function.call, Number);;

        vm.targetChannels = vm.targetChannels.filter(targetChannel => targetChannel !== channel);
        console.log(vm.targetChannels);

        vm.targetChannel = -1;

        //Used to show error message when there is a server error.
        vm.throttleError = false;

        vm.stop = stop;
        vm.fireSpecialWeapon = fireSpecialWeapon;




        var throttleTopic = `${brokerDetails.UUID}/control/${channel}/throttle`;
        var getResourcesTopic = `${brokerDetails.UUID}/resources`;
        var resourceStateTopic = `${brokerDetails.UUID}/control/{channel}/{resourceId}/state`;

        //subscribe to channel throttle
        mqttService.subscribe(throttleTopic);

        // subscribe to channel resources
        mqttService.subscribe(getResourcesTopic);

        /*
         Stops the car and returns user back to the index page,
        */
        function stop() {
            //stop the car
            var payload = {
                set: 0
            }
            mqttService.publish(throttleTopic, JSON.stringify(payload));

            mqttService.disconnect();
            $state.transitionTo('index', {});
        }

        /*
            Special weapons messages that could be received :
            { state: "busy" } or { state: "ready" }
    
            Special weapons payload format for firing :
            { state: "requested", target: [CHANNEL_ID] }
    
        */

        function fireSpecialWeapon(resourceId) {
            let payload = {
                state: "requested",
                target: vm.targetChannel
            };
            mqttService.publish(resourceStateTopic.replace(/\{resourceId\}/, resourceId).replace(/\{channel\}/, channel), JSON.stringify(payload));
        }

        /*
         If user navigates to a different webpage stop the car.
         When this state is navigated to the onhashchange function 
         is called which is ignored. 
        */
        window.onhashchange = function () {
            if (changed) {
                console.log('changed');
                stop();
            } else {
                changed = true;
            }
        }

        mqttService.onMessageArrived(function (message) {

            console.log(message);

            //check the correct topic
            if (message.topic === throttleTopic) {
                var throttle = JSON.parse(message.payloadString);

                //filter out any set throttle messages
                if (throttle.hasOwnProperty("throttle")) {
                    vm.actualThrottle = throttle.throttle;
                }
            } else if (message.topic === getResourcesTopic) {
                vm.resources = JSON.parse(message.payloadString);
                vm.resources.forEach(resource => {
                    // subscribe to resource state for this channel
                    mqttService.subscribe(resourceStateTopic.replace(/\{resourceId\}/, resource.id));
                });
                $scope.$apply();
            }

            if (vm.resources !== undefined) {
                vm.resources.forEach(resource => {
                    if (message.topic === resourceStateTopic.replace(/\{resourceId\}/, resource.id)) {
                        console.log(message);
                    }
                })
            }

        });

        /*
         When users changes car throttle a change request is sent to server. 
        */
        $scope.$watch("carControlView.throttle", function (newThrottle, oldThrottle) {
            if (newThrottle != oldThrottle) {
                var payload = {
                    set: newThrottle
                }
                mqttService.publish(throttleTopic, JSON.stringify(payload));
                console.log(newThrottle);
            }
        })

    }
})();


