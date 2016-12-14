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
        $scope.colourKey = {
                                r: 'red-team',
                                b: 'blue-team',
                                n: 'neutral-team',
                                a: 'black-team' 
                            };

        $scope.wordList = WordService.getWordSet(null);
        $scope.colorMap = WordService.getColourMap(25);

        $scope.game = {code : 'sampleCODE'};


        $scope.createGame = function (argument) {
             /* body... */ 
        }

        $scope.joinGame = function (argument) {
             /* body... */ 
        }

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
