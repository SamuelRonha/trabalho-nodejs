const mongoose = require('mongoose')

const validateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

function getUser() {
    const _schema = new mongoose.Schema(
        {
            name: String,
            type: String,
            email: {
                type: String,
                required:true,
                unique:true,
                validate: [validateEmail, 'Preencha com um email válido']
            }
        }, { collection: 'User' }
    )
    if (mongoose.models && mongoose.models.Model)
        return mongoose.models.Model

    return mongoose.model('User', _schema)
}

module.exports = getUser()