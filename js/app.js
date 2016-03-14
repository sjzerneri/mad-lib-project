var app = angular.module('madLibs', ['ngAnimate'])

app.constant('VERSION', "1")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

app.controller('madLibsController', function ($scope) {

    $scope.data = {};

    $scope.gender = {
        pronoun: 'she',
        poss: 'her'
    };


    $scope.submit = function () {
        console.log('submit happened');
        $scope.hideForm = true;
    }

    $scope.startover = function () {
        console.log('this happened');
        $scope.data = {};
        $scope.hideForm = false;
        $scope.submitted = false;
    }

});
