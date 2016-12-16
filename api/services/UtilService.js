var Chance = require('chance');
var chance = new Chance();

module.exports = {
    generateGameCode : function (codeLength) {
        return chance.hash({length : codeLength , casing : 'upper'});
    }
}