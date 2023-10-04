import React from 'react';
import * as healthDataAPI from '../../utilities/healthData-api'

const UserHealthDisplay = ({ formData }) => {
  // async function handleDeleteClick() {
  //   await healthDataAPI.deleteData(formData)
  // };

  return (
    <div>
      <h2>Form Data:</h2>
      <p>Gender: {formData.gender}</p>
      <p>Age: {formData.age}</p>
      <p>Height: {formData.height} cm</p>
      <p>Weight: {formData.weight} kg</p>
      <p>Activity Level: {formData.activityLevel}</p>
      <p>Goal: {formData.goal}</p>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
    </div>
  );
};

export default UserHealthDisplay;
