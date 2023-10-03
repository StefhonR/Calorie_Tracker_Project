import React from 'react';

const UserHealthDisplay = ({ formData }) => {
  return (
    <div>
      <h2>Form Data:</h2>
      <p>Gender: {formData.gender}</p>
      <p>Age: {formData.age}</p>
      <p>Height: {formData.height} cm</p>
      <p>Weight: {formData.weight} kg</p>
      <p>Activity Level: {formData.activityLevel}</p>
      <p>Goal: {formData.goal}</p>
    </div>
  );
};

export default UserHealthDisplay;
