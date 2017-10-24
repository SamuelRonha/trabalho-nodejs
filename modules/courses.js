const mongoose = require('mongoose')
const User = require('../modules/users');


function getCourse() {
    const _schema = new mongoose.Schema(
        {
            name: String,
            teacher: {
                type: String,
                default: 'Suissa',
                required: true
            },
            students: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }],
            book: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
        }
    )

    _schema.pre('save', function (next, req) {
        var User = mongoose.model('User');
        var count = 0;

        this._doc.students.forEach(function (element, index, array) {
            User.findOne({ _id: element }, function (err, found) {
                if (found.type == "teacher") {
                    console.log(found)
                    count++;
                }
                if (count > 1) {
                    return next(new Error({ error: "only one teacher are allowed to each course." }));
                } else if
                (index === array.length - 1) {
                    return next()
                }


            });
        }
        );

    });
    if (mongoose.models && mongoose.models.Model)
        return mongoose.models.Model

    return mongoose.model('Course', _schema)
}



module.exports = getCourse()
