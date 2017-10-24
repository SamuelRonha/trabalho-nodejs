module.exports = (Model) => (req, res) => {

    var baseUrl = req.baseUrl.replace("/api/", "");

    const Model = require('../modules/' + baseUrl);

    Model.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => console.log('ERRO: ', res.json(err.message)))
}
