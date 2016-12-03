'use strict';

/**
 * @ngdoc service
 * @name codenamesApp.WordService
 * @description
 * # WordService
 * Service in the codenamesApp.
 */
angular.module('codenamesApp')
    .service('WordService', function() {
            this.getWordSet = function (currentSet) {
                var wordList = [
                    {wid: 0, category: 'default', value: 'alligator'},
                    {wid: 0, category: 'default', value: 'ant'},
                    {wid: 0, category: 'default', value: 'bear'},
                    {wid: 0, category: 'default', value: 'bee'},
                    {wid: 0, category: 'default', value: 'bird'},
                    {wid: 0, category: 'default', value: 'camel'},
                    {wid: 0, category: 'default', value: 'cat'},
                    {wid: 0, category: 'default', value: 'cheetah'},
                    {wid: 0, category: 'default', value: 'chicken'},
                    {wid: 0, category: 'default', value: 'chimpanzee'},
                    {wid: 0, category: 'default', value: 'cow'},
                    {wid: 0, category: 'default', value: 'crocodile'},
                    {wid: 0, category: 'default', value: 'deer'},
                    {wid: 0, category: 'default', value: 'dog'},
                    {wid: 0, category: 'default', value: 'dolphin'},
                    {wid: 0, category: 'default', value: 'duck'},
                    {wid: 0, category: 'default', value: 'eagle'},
                    {wid: 0, category: 'default', value: 'elephant'},
                    {wid: 0, category: 'default', value: 'fish'},
                    {wid: 0, category: 'default', value: 'fly'},
                    {wid: 0, category: 'default', value: 'fox'},
                    {wid: 0, category: 'default', value: 'frog'},
                    {wid: 0, category: 'default', value: 'giraffe'},
                    {wid: 0, category: 'default', value: 'goat'},
                    {wid: 0, category: 'default', value: 'goldfish'}
                ];
    
                return wordList;
            }
    
            this.shuffleWords = function (wordArray) {
                return chance.shuffle(wordArray);
            }
        });
