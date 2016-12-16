/**
 * Game.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        gameId: {
            type: 'string',
            unique: 'true'
        },

        words: {
            type: 'array'
        },

        colourMap: {
            type: 'array'
        }
    }
};


