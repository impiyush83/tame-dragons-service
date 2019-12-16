const ruleController = require('../controller/ruleController')

const addRule = function (req, res) {
  const requestBody = req.body
  ruleController.addRule(requestBody).then((ruleId) => {
    return res.status(200).json({
      ruleId: ruleId
    })
  }).catch((err) => {
    return res.status(400).json(err)
  })
}


const deleteRule = function (req, res) {
  const requestBody = req.body
  ruleController.deleteRule(requestBody).then(() => {
    return res.status(200).json({
      message: 'Rule is deleted successfully' 
    })
  }).catch((err) => {
    return res.status(400).json(err)
  })
}

module.exports = {
  addRule,
  deleteRule
}
