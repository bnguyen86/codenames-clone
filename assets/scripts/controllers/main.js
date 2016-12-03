'use strict';

/**
 * @ngdoc function
 * @name codenamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codenamesApp
 */
angular.module('codenamesApp')
    .controller('MainCtrl', ['$scope', 'WordService',
                            function ($scope, WordService) {
        $scope.wordList = WordService.getWordSet(null);
        $scope.wordList = WordService.shuffleWords($scope.wordList);
    }]);
