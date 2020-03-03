# brookerdetails_MQTT
A simple starter AngularJS single page web-app which allows us to connect to our MQTT database and then control our cars on the tracks based off this so that we may be able to use the cars over an SPWA. For more details please see https://github.com/aliceliveprojects/little_list_SPWA.

We have another repository that this was cloned from that already made the connection (https://github.com/liveprojects-zuba/brookerdetails_MQTT). This repository will allow us to have a buffer page while the page connects to our MQTT server. If the connection takes more than a few seconds there will be a buffer animation that will load on the buffer page.

### Notes

1. This is only a start application for those new to AngularJS so functionality is very limited.
2. Delving deeper into the project you will find code containing a promise, a promise represents the eventual result of an operation. You can use a promise to specify what to do when an operation eventually succeeds or fails. Typically we call these asynchronous operations.
3. Promises in AngularJS are provided by the [$q service](<https://docs.angularjs.org/api/ng/service/$q>), this allows you to run functions asynchronously and use their return values (or exceptions) when they are done processing. 
