'use strict';

/**
 * @ngdoc function
 * @name codenamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codenamesApp
 */
angular.module('codenamesApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.wordList = [
          'alligator',
          'ant',
          'bear',
          'bee',
          'bird',
          'camel',
          'cat',
          'cheetah',
          'chicken',
          'chimpanzee',
          'cow',
          'crocodile',
          'deer',
          'dog',
          'dolphin',
          'duck',
          'eagle',
          'elephant',
          'fish',
          'fly',
          'fox',
          'frog',
          'giraffe',
          'goat',
          'goldfish'
  
      ]
    }]);
