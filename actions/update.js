module.exports = (Model) => (req, res) => {

    var baseUrl = req.baseUrl.replace("/api/", "");

    const Model = require('../modules/' + baseUrl);

    const query = {
        _id: req.params.id
    }
    const mod = req.body

    Model.update(query, mod, (err, data) => {
        if (err) return console.log('ERRO: ', err)

        return res.json(data)
    })
}