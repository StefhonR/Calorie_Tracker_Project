import { useState } from 'react';
import * as healthDataAPI from '../../utilities/healthData-api'

const UserHealthForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activityLevel: 'moderate',
    goal: 'reduction'
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const data = await healthDataAPI.addData(formData);
      setFormData(data);
      onSubmit(data);
    } catch {
      setError('Form Invalid');
    }
  };

  return (
    <div>
      <form id="healthForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} form="healthForm">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height (in cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="weight">Weight (in kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            />
        </div>
        <div>
        <label htmlFor="activityLevel">Activity Level: </label>
          <select id="activityLevel" name="activityLevel" value={formData.activityLevel} onChange={handleChange} form="healthForm">
            <option value="sedentary">Little to no exercise + work a desk job</option>
            <option value="light">Light exercise 1-3 days/week</option>
            <option value="moderate">Moderate exercise 3-5 days/week</option>
            <option value="high">Heavy exercise 6-7 days/week</option>
            <option value="extreme">Very heavy exercise, hard labor job, training 2x/day</option>
          </select>
        </div>
        <div>
        <label htmlFor="goal">Goal: </label>
          <select id="goal" name="goal" value={formData.goal} onChange={handleChange} form="healthForm">
            <option value="reduction">weightloss</option>
            <option value="maintain">maintain current weight</option>
            <option value="gain">gain weight</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default UserHealthForm;
