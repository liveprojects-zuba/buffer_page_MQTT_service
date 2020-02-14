# little_list
A simple starter AngularJS single page web-app which displays a list of canned events, and navigates to a detail view for one of them

## Quick Start

- Open the 'little_list' project with Visual Studio Code

- Open the terminal using the following commands

  ```
  CTRL + Shift + `(backtick)
  ```

- Once that's done copy and paste this line of code

  ```
  sudo npm install -g http-server
  ```

  This will prompt you for your machines admin password, enter your password to complete the process; giving you a similar output as below.

 [![terminal-output.png](https://i.postimg.cc/L8TsBdZs/terminal-output.png)](https://postimg.cc/DSSFnM6V)

- Finally enter this final line of code to get your the single page web-app up and running!

- ```
  http-server -a localhost -p 8000
  ```


### Notes

1. This is only a start application for those new to AngularJS so functionality is very limited.
2. Delving deeper into the project you will find code containing a promise, a promise represents the eventual result of an operation. You can use a promise to specify what to do when an operation eventually succeeds or fails. Typically we call these asynchronous operations.
3. Promises in AngularJS are provided by the [$q service](<https://docs.angularjs.org/api/ng/service/$q>), this allows you to run functions asynchronously and use their return values (or exceptions) when they are done processing. 

