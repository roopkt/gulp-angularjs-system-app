module MySample {
  export var Module = angular.module('app', ['ngRoute','contactModule']);
  Module.config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/contact',
        {
          template: '<contact></contact>',
        });
  }]);
}
