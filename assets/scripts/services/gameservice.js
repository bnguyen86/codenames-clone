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
        
            this.createGame = function (gameData) {
                io.socket.post('/game', gameData, function (resData, jwres) {
                    console.log('GameService.createGame:' + resData);
                    console.log(resData);

                    gameData.gameId = resData.gameId;      
                    return resData;
                });
            }

            this.joinGame = function (gameId) {
                io.socket.get('/game/' + gameId, function (resData) {
                    console.log('GameService.joinGame');
                    console.log(resData);

                    return resData;
                });
            }

            this.chooseWord = function (gameId, position, colour) {
                var moveData = {
                    'position': position,
                    'colour': colour
                };
                io.socket.post('/game/'+ gameId, moveData, function (resData) {
                    console.log('GameService.chooseWord');
                    console.log(resData);
                });
            },

            this.colourKey = {
                                r: 'red-team',
                                b: 'blue-team',
                                n: 'neutral-team',
                                a: 'black-team' 
                            };


        }]);
