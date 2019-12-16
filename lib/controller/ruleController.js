const db = require('../dao/models/rule')
const { uuid } = require('uuidv4')
const ErrorUtil = require('../util/error')

const addRule = async (rule) => {
  const newRule = {
    ruleId: uuid(),
    timeInHour: rule.timeInHour,
    noOfAnimal: rule.noOfAnimal
  }
  await db.rules.create(newRule).catch((err) => {
    console.log(err)
  })
  return newRule.ruleId
}

const deleteRule = async (rule) => {
  const ruleId = rule.ruleId
  const query = {ruleId: ruleId}
  await db.rules.findOneAndDelete(query).catch((err) => {
    console.log(err)
    return Promise.reject(ErrorUtil.buildError(code=404, message='Rule not found'))
  })
}

module.exports = {
  addRule,
  deleteRule
}
