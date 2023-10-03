const HealthData = require("../../models/healthData.cjs")

module.exports = {
  create,
  data
}

async function create(req, res) {
  try {
    const healthData = await HealthData.create(req.body);

    res.status.json(healthData);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function data(req, res) {
  try{
    const data = await HealthData.find({ user: req.user._id })

    res.status(200).json(data)
  } catch (err) {
    res.status(400).json(err)
  }
}