'use strict'

const { celebrate, Joi, errors, Segments } = require('celebrate');

const addDragonSchema = {
  [Segments.BODY]: Joi.object().keys({
    dragonName: Joi.string().required()
  })
}

const addRuleSchema = {
  [Segments.BODY]: Joi.object().keys({
    timeInHour: Joi.number().min(0).required(),
    noOfAnimal: Joi.number().min(0).required()
  })
}

const deleteRuleSchema = {
  [Segments.BODY]: Joi.object().keys({
    ruleId: Joi.string().required()
  })
}

module.exports = {
  addDragonSchema: celebrate(addDragonSchema),
  addRuleSchema: celebrate(addRuleSchema),
  deleteRuleSchema: celebrate(deleteRuleSchema)
}
