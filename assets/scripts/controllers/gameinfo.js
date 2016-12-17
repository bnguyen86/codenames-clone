'use strict';

/**
 * @ngdoc function
 * @name codenamesApp.controller:MainCtrl
 * @description
 * # GameInfoCtrl
 * Controller of the codenamesApp
 */
angular.module('codenamesApp')
    .controller('GameInfoCtrl', ['$scope', '$mdDialog', 'game',
                                function ($scope, $mdDialog, game) {
        $scope.game = game;

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
 
    }]);
