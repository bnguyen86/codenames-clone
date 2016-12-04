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

        $scope.shuffleWords = function (wordArray) {
            $scope.wordList = WordService.shuffleWords(wordArray);
            
            return $scope.wordList;
        };

        $scope.setTeam = function (teamName, cardObj) {
            console.log(teamName);
            console.log(cardObj);
            if(teamName === cardObj.team){
                cardObj.team = '';
            } else{
                cardObj.team = teamName;                
            }
        }
    }]);
