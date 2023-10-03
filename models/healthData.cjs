const { Schema, model } = require('mongoose')

const healthDataSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    activityLevel: { type: String, required: true },
    goal: { type: String, required: true }
  })

  module.exports = model("HealthData", healthDataSchema)