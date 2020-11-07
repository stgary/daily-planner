const db = require("../data/dbConfig.js");

module.exports = {
  add,
  get,
  getById,
  remove
}

function add(data) {
  return db('events')
    .insert(data)
    .then(id => {
      return getById(id[0]);
    })
    .catch(error => {
      res.json(error.message)
    })
}

function get() {
  return db('events');
}

function getById(id) {
  return db('events')
    .where({ id })
    .first();
}

function remove(id) {
  return db('events')
    .where({ id })
    .del();
}