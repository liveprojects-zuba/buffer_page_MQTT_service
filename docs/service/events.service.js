(function () {
    'use strict';

    angular
        .module('eventsjs', [])
        .factory('eventsSrvc', eventsSrvc);

        eventsSrvc.$inject = [
            '$q', // promises service
            '$timeout', // timeout service
            'moment' // does dates really well
        ];

    function eventsSrvc(
        $q,
        $timeout,
        moment
    ) {
        var eventsArray = [];
        var service = {};

        var PAUSE_FOR_A_WHILE_MS = 3000;
        var NUM_DUMMY_EVENTS = 10;


        var createEvent = function(name, date, postcode){

            var result = {
                name : name,
                date : date,
                postcode: postcode
            }
            return result;
        }

        var createDummyEvents = function(numToCreate){
            var result = [];

            for(var index=0; index < numToCreate; index++){

                var name = "event " + index;
                var date = moment().add(index, "years").toDate();
                var postcode = "M1 5GD";

                result.push(createEvent("event " + index, date, postcode));
            }
            
            //  uncomment the below to test an error condition
            // result = null;
            return result;
        }


        var replaceWithRealCode = function(){
            var deferred = $q.defer();
            
            $timeout(
                function () {
                    let result = createDummyEvents(NUM_DUMMY_EVENTS);

                    if(result !== null){
                        eventsArray = result;
                        deferred.resolve(eventsArray);
                    }else{
                        eventsArray = [];
                        deferred.reject(new Error("YOUR ERROR MESSAGE HERE"));
                    }
                    },
                    PAUSE_FOR_A_WHILE_MS);
                
            

            return deferred.promise;
        }

        var promiseToUpdateEvents = function(){
            // returns a promise
            return replaceWithRealCode();
        }

        service.updateEvents = function(){
            return promiseToUpdateEvents();
        } 

        function getEventNames(array){
            var result = [];
            array.forEach(
                function(event){
                    result.push(event.name);
                }
            );
            return result;
        }


        service.getEvents = function(){
            return getEventNames(eventsArray);
        }

        service.getNumEvents = function(){
            return eventsArray.length;
        }

        service.getEventAt = function(index){
            return angular.copy(eventsArray[index]);
        }


        return service;

    }

    
})();