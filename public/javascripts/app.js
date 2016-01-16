(function () {


    angular.module('learn-express', ['ngMaterial','ngMdIcons'])
        .controller("home", function ($scope, $interval) {
            var tick = function () {
                $scope.time = Date.now();
            };
            $interval(tick, 1000);
        });
} ())