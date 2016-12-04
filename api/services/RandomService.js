module.exports = {
    getRandomWord: function (dbCount, limit, criteria, wordArray, res) {
        Word.find(criteria).limit(1).skip(Math.random() * dbCount)
            .then(function (word) {
              if(word.length){
                wordArray.push(word[0]);
              }
              if (wordArray.length < limit) {
                RandomService.getRandomWord(dbCount, limit, criteria, wordArray, res);
              } else {
                if(wordArray.length === 1){
                  return res.json(wordArray[0]);
                } else{
                  return res.json(wordArray);
                }
              }
            })
            .catch(sails.log.error);
    }
}