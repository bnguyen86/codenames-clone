/**
 * Word.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    wid: {
        type: 'integer',
        unique: true,
        autoIncrement: true
    },
    value: {
        type: 'string',
        unique: true
    },
    category: {
        type: 'string'
    }

  }
};

