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
                //var wordList = $resource('scripts/wordDb.json');
                return wordList.query();
            }

            this.getRandomWord = function (wordArray, category) {
                var word = $resource('/word/one');
                    
                return word.query();
            }
    
            this.shuffleWords = function (wordArray) {
                return chance.shuffle(wordArray);
            }

            this.getColourMap = function(dimensions){ //for now it's always 25
                var first = chance.bool();//if true, red goes first
                var firstColour;
                var secondColour;
                var colourMap = {isRedFirst: first, map : []};

                if(first){
                    firstColour = 'r';
                    secondColour = 'b';
                } else{
                    firstColor = 'b';
                    secondColour = 'r';
                }        

                for(var i = 0 ; i < 9 ; i++){
                    colourMap.map.push(firstColour);
                }

                for(var i = 0 ; i < 8 ; i++){
                    colourMap.map.push(secondColour);
                }

                for(var i = 0 ; i < 7 ; i++){
                    colourMap.map.push('n');
                }

                colourMap.map.push('a');

                colourMap.map = chance.shuffle(colourMap.map);

                return colourMap;
            }


        }]);
