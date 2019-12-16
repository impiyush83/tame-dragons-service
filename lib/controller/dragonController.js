const db = require('../dao/models/dragon')
const { uuid } = require('uuidv4')

const addDragon= async (dragon) => {
  const newDragon = {
    dragonId:  uuid(),
    dragonName: dragon.dragonName
  }
  console.log('Hello')
  await db.dragons.create(newDragon).catch((err) => {
    console.log(err)
  })
  return newDragon.dragonId
}

module.exports = {
  addDragon
}
