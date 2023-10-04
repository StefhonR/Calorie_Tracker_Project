const HealthData = require("../../models/healthData.cjs")

module.exports = {
  create,
  data,
  deleteData
}

async function create(req, res) {
  try {
    const healthData = await HealthData.create(req.body);

    res.status(200).json(healthData);
  } catch (err) {
    console.log(err)
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

async function deleteData(req, res) {
  try {

    await HealthData.deleteMany({});

    res.status(200).json({ message: "All HealthData records deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}