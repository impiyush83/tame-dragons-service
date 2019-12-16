    'use strict'

const routes = require('express').Router()
const RuleHandler = require('../handler/ruleHandler')
const Validator = require('../validator')

routes.post(`/rule`, Validator.addRuleSchema, RuleHandler.addRule)
routes.delete(`/rule`, Validator.deleteRuleSchema, RuleHandler.deleteRule)

module.exports = routes
