'use strict'

const routes = require('express').Router()
const DragonHandler = require('../handler/dragonHandler')
const Validator = require('../validator')

routes.post(`/dragon`, Validator.addDragonSchema, DragonHandler.addDragon)

module.exports = routes
