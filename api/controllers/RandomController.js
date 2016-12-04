/**
 * RandomController
 *
 * @description :: Server-side logic for managing randoms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RandomController.randomSet()`
   */
  randomSet: function (req, res) {
    var limit = req.query.num ? req.query.num : 25;
    var criteria = null;
    var wordSet = [];

    Word.count()
      .then(function (count) {
        RandomService.getRandomWord(count, limit, criteria, wordSet, res);
      })
      .catch(sails.log.error);
  },


  /**
   * `RandomController.randomSetByCategroy()`
   */
  randomSetByCategroy: function (req, res) {
    return res.json({
      todo: 'randomSetByCategroy() is not implemented yet!'
    });
  },


  /**
   * `RandomController.randomWord()`
   */
  randomWord: function (req, res) {
    var criteria = null;
    
    Word.count()
      .then(function (count) {
        RandomService.getRandomWord(count, 1, criteria, [], res);
      })
      .catch(sails.log.error);
  },


  /**
   * `RandomController.randomWordByCategory()`
   */
  randomWordByCategory: function (req, res) {
    return res.json({
      todo: 'randomWordByCategory() is not implemented yet!'
    });
  }
};

