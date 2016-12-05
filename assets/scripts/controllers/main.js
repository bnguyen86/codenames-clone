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
            if(teamName === cardObj.team){
                cardObj.team = '';
            } else{
                cardObj.team = teamName;                
            }
        }

        $scope.getNewWordSet = function (wordArray, category) {
            $scope.wordList = WordService.getWordSet(wordArray, category);            
            return $scope.wordList;
        }

        $scope.getNewWord = function (position, wordArray) {
            //replace the word at the current position with a new word
        }
    }]);
