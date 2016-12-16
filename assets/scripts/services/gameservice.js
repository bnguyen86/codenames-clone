'use strict';

/**
 * @ngdoc service
 * @name codenamesApp.GameService
 * @description
 * # GameService
 * Service in the codenamesApp.
 */
angular.module('codenamesApp')
    .service('GameService', ['$resource', function($resource) {
        
            this.createGame = function (wordsArr, colourMapArr) {
                var gameData =  {
                                    words: wordsArr,
                                    colourMap: colourMapArr
                                };

                io.socket.post('/game', gameData, function (resData, jwres) {
                    console.log(resData);

                    return resData;
                });
            }

            this.joinGame = function (gameId) {
                io.socket.get('/game/' + gameId, function (resData) {
                    console.log(resData);
                });
            }

            this.chooseWord = function (position, colour) {
                 /* body... */ 
            }


        }]);
