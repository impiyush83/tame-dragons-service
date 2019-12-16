const dragonController = require('../controller/dragonController')

const addDragon = function (req, res) {
  const requestBody = req.body
  dragonController.addDragon(requestBody).then((dragonId) => {
    return res.status(200).json({
      dragonId: dragonId
    })
  }).catch((err) => {
    return res.status(400).json(err)
  })
}

module.exports = {
  addDragon
}
