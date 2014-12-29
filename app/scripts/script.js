/**
 * Created by Vitaliy.Supryhan on 12/29/2014.
 */
angular.module("app", [])

    .controller("Controller", function ($scope) {
        $scope.users = [
            {name: "Charlie", type: "google"},
            {name: "Bob", type: "twitter"},
            {name: "Alice", type: "facebook"}
        ];
    })

    .directive("profile", function () {
        return {
            template: '<ng-include src="getTemplateUrl()"/>',
            //templateUrl: unfortunately has no access to $scope.user.type
            scope: {
                user: '=data'
            },
            restrict: 'E',
            controller: function ($scope) {
                //function used on the ng-include to resolve the template
                $scope.getTemplateUrl = function () {
                    //basic handling. It could be delegated to different Services
                    if ($scope.user.type == "google")
                        return "views/google.tpl.html";
                    if ($scope.user.type == "twitter")
                        return "views/twitter.tpl.html";
                    if ($scope.user.type == "facebook")
                        return "views/facebook.tpl.html";
                }
            }
        };
    });