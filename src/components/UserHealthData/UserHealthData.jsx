import React from 'react'
import UserHealthForm from '../UserHealthForm/UserHealthForm'

export default function UserHealthData() {
  const handleSubmit = (formData) => {
    console.log('Form Data:', formData);
  }
  
  return (
    <div>
      {formData && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Gender: {formData.gender}</p>
        </div>
      )}
    </div>
  )
}
