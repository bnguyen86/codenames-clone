'use strict';

/**
 * @ngdoc service
 * @name codenamesApp.WordService
 * @description
 * # WordService
 * Service in the codenamesApp.
 */
angular.module('codenamesApp')
    .service('WordService', ['$resource', function($resource) {
            this.getWordSet = function (currentSet) {
                var wordList = $resource('/word');

    
                return wordList.query();
            }

            this.getRandomWord = function (wordArray) {
                 /* body... */ 
            }
    
            this.shuffleWords = function (wordArray) {
                return chance.shuffle(wordArray);
            }


        }]);
