(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsUpdateCtrl', control);

    control.$inject = [
        '$q',
        '$state',
        'eventsSrvc'
        ];
    
    function control(
        $q,
        $state,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            
         });
        

        // TODO: Error Handling
        eventsSrvc.updateEvents().then(
            function success (response){
                $state.go('events_list');
                console.log(response);
            },function failure(error){
                alert('Sorry we could not get events');
                $state.go('events_list');
                console.log("Could not get events")
            }
        );
    }
})();
