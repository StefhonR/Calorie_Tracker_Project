import React, { useState, useEffect } from 'react'
import UserHealthForm from '../../components/UserHealthForm/UserHealthForm.jsx';
import UserHealthDisplay from '../../components/UserHealthDisplay/UserHealthDisplay.jsx';
import * as healthDataAPI from '../../utilities/healthData-api.js'


export default function DashboardPage() {
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : null;
  });

  const saveFormDataToLocalStorage = (formData) => {
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  // useEffect(() => {

  //   async function fetchHealthData() {
  //     try {
  //       const data = await healthDataAPI.getHealthData()
  //       console.log(data)
  //       setFormData(data)
  //     } catch(err){
  //       console.log(err)
  //     }
  //   }
  //   fetchHealthData()

  // }, [])

  const handleSubmit = (formData) => {
    setFormData(formData);
    saveFormDataToLocalStorage(formData);
  };

  return (
    <div>
      <h1>My Page</h1>
      {formData ? (
        <UserHealthDisplay formData={formData} />
      ) : (
        <UserHealthForm onSubmit={handleSubmit} />
      )}
    </div>
  )
}

