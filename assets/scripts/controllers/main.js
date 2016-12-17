'use strict';

/**
 * @ngdoc function
 * @name codenamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codenamesApp
 */
angular.module('codenamesApp')
    .controller('MainCtrl', ['$scope', '$mdDialog', '$mdToast', 'WordService', 'GameService',
                            function ($scope, $mdDialog, $mdToast, WordService, GameService) {

        $scope.colourKey = GameService.colourKey;

        $scope.game =   {   gameId : null,
                            wordList : null,
                            colorMap : null
                        };

        $scope.game.wordList = WordService.getWordSet(null);
        $scope.game.colorMap = WordService.getColourMap(25);

        $scope.shuffleWords = function (wordArray) {
            $scope.wordList = WordService.shuffleWords(wordArray);
            //TODO: update the game and broadcast to the room            
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


        $scope.showCreateGame = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var createGame = $mdDialog.confirm()
            .title('Create a new game room.')
            .textContent('Create a new game room and have all your friends join the party!')
            .ariaLabel('Create a new game room.')
            .targetEvent(ev)
            .ok('Create game room')
            .cancel('Cancel');

            $mdDialog.show(createGame).then(function() {
                console.log('creating game');
                GameService.createGame($scope.game);
            }, function() {
                console.log('create game dialog closed');
            });
        };

        $scope.showGameInfo = function(ev) {
                $mdDialog.show({
                    controller: 'GameInfoCtrl',
                    templateUrl: 'templates/game-info.dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    bindToController: true,
                    locals : { game : { gameId : $scope.game.gameId }}
                })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        $scope.showJoinGame = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            //change this to a custom dialog so I can add the camera function
            var confirm = $mdDialog.prompt()
                            .title('Join a game room')
                            .textContent('Enter the game room id you want to join or use the camera to scan the QR code.')
                            .placeholder('Game Room Id')
                            .ariaLabel('Game Room Id')
                            .initialValue(null)
                            .targetEvent(ev)
                            .ok('Join!')
                            .cancel('Nevermind');

            $mdDialog.show(confirm).then(function(result) {
                //call join game method
                GameService.joinGame(result);
            }, function() {
                console.log('join dialog closed')
            });
        };

        $scope.showToast = function (message) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(message)
                    .position('bottom right')
                    .hideDelay(3000)
            );

        }

        io.socket.on('message', function (msg) {
            console.log(msg);
        });

        io.socket.on('joined', function (game) {
            if($scope.game.gameId != game.gameId){
                $scope.game = game;
            }
            $scope.showToast('Somebody has joind the game room.');
        });

        io.socket.on('gameAction', function (msg) {
            console.log(msg);
        });

        io.socket.on('created', function (game) {
            // if($scope.game.gameId != game.gameId){
            //     $scope.game.gameId = game.gameId; //do i really need this?
            // }
            $scope.showToast('You have created a game room!');
        });
}]);
