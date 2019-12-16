'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ruleSchema = new Schema({
  ruleId: {
    type: String,
    unique: true,
    required: true
  },
  timeInHour: {
    type: Number,
    required: true
  },
  noOfAnimal: {
    type: Number,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = {
  rules: mongoose.model('rules', ruleSchema)
}
