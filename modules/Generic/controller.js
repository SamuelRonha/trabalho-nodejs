const Model = require('./model')



const ACTIONS_PATH = './../../'
const create = require(ACTIONS_PATH + 'actions/create')(Model)
const find = require(ACTIONS_PATH + 'actions/find')(Model)
const findOne = require(ACTIONS_PATH + 'actions/findOne')(Model)
const update = require(ACTIONS_PATH + 'actions/update')(Model)
const remove = require(ACTIONS_PATH + 'actions/remove')(Model)
const findByName = require(ACTIONS_PATH + 'actions/findByName')(Model)
const populate = require(ACTIONS_PATH + 'actions/populate')(Model)

module.exports = {
  create,
  find,
  findOne,
  update,
  findByName,
  remove,
  populate
}
