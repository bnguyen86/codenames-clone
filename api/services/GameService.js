module.exports = {
    createGame: function (req, res) {
        var randomGameCode = UtilService.generateGameCode(6);

        //TODO: verify that game data is correct
        var gameData = req.body;

        if(gameData){
            gameData.gameId = randomGameCode;
        } else{
            return res.badRequest();
        }

        Game.create(gameData).exec(function (e, record) {
            if(e){
                GameService.createGame(req, res); //if there was an error, try again
            } else{
                sails.sockets.join(req, record.gameId, function (socketErr) {
                    if(e){
                        res.badRequest(socketErr);
                    }

                    sails.sockets.broadcast(record.gameId, 
                                            'created', 
                                            'You created a new game! Id: ' + record.gameId);
                });
                return res.json({gameId : record.gameId});
            }
        });
    },

    joinGame: function (req, res) {
        var gameIdToFind = req.param('gameId');
        gameIdToFind = gameIdToFind.toUpperCase();

        Game.findOne({gameId: gameIdToFind}).exec(function (e, record) {
            if(e){
                console.error(e);
                return res.badRequest({message: 'Could not find game'});                
            } else{
                sails.sockets.join(req, record.gameId, function (socketErr) {
                    if(e){
                        return res.serverError(socketErr);
                    }

                    sails.sockets.broadcast(record.gameId,
                                            'joined',
                                            record);

                    return res.json({
                      message: 'Subscribed to game: ' + record.gameId
                    });
                });
                
            }
        });
    },

    playMove: function (req, res) {
        var gameId = req.param('gameId');

        var moveData = req.body;

        sails.sockets.broadcast(gameId, 'gameAction', moveData);

        return res.ok(); 
    },

    updateGame: function (req, res) {
        var gameIdToUpdate = req.param('gameId');
        var gameData = req.body;

        delete gameData.gameId;

        Game.update({gameId: gameIdToUpdate}, gameData).exec(function (e, record) {
            if(e){
                console.error(e);
                return res.badRequest({message: 'Could not find game'});                
            } 
        });
        return res.ok();
    }
}