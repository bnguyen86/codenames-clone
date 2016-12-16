/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createGame: function (req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }

        GameService.createGame(req, res);
    },

    joinGame: function (req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }

        GameService.joinGame(req, res);
    },

    playMove: function (req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }

        GameService.playMove(req, res);
    },

    updateGame: function (req, res) {
        GameService.updateGame(req, res);
    }
};

// io.socket.get('/game/test', function (resData) {
//  console.log(resData); // => {id:9, name: 'Timmy Mendez'}
// });

