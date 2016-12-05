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
            this.getWordSet = function (currentSet, category) {
                var wordList = $resource('/word/set');

                return wordList.query();
            }

            this.getRandomWord = function (wordArray, category) {
                var word = $resource('/word/one');
                    
                return word.query();
            }
    
            this.shuffleWords = function (wordArray) {
                return chance.shuffle(wordArray);
            }


        }]);
