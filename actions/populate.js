module.exports = (Model) => (req, res) => {

    var baseUrl = req.baseUrl.replace("/api/", "");
    require('../modules/' + "books");
    const Model = require('../modules/' + baseUrl);


    const query = {
        _id: req.params.id
    }

    return Model.findOne(
        (query)).
        populate('students').populate('book').exec(
        (err, data) => {
            if (err)
                return console.log('ERRO: ', err)
            return res.json(data)
        })
}

// Story.
//     findOne({ title: 'Casino Royale' }).
//     populate('author').
//     exec(function (err, story) {
//         if (err) return handleError(err);
//         console.log('The author is %s', story.author.name);
//         // prints "The author is Ian Fleming"
//     });