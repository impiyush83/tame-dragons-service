'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dragonSchema = new Schema({
  dragonId: {
    type: String,
    unique: true,
    required: true
  },
  dragonName: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = {
    dragons: mongoose.model('dragons', dragonSchema)
}
