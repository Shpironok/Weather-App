const angular = require('angular');
const myapp = angular.module('myapp',[]);

require("./services")(myapp);
require("./controllers")(myapp);