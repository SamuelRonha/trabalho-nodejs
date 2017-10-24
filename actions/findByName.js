module.exports = (Model) => (req, res) => {
    var baseUrl = req.baseUrl.replace("/api/", "");
    const Model = require('../modules/' + baseUrl);
    var query;
    if (baseUrl == "books") {
        query = {
            'title': {'$regex': req.query.title, $options: 'i'}
        }
    } else
        query = {
            'name': {'$regex': req.query.name, $options: 'i'}
        }

    Model.find(query)
        .then((data) => res.json(data))
        .catch((err) => console.log('ERRO: ', err))
}