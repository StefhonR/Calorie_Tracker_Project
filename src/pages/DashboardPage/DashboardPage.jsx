import React from 'react'
import UserHealthForm from '../../components/UserHealthForm/UserHealthForm.jsx';


function DashboardPage() {
  const handleSubmit = (formData) => {
    console.log('Form Data:', formData);
  }

  return (
    <div>
      <h1>My Page</h1>
      <UserHealthForm onSubmit={handleSubmit} />
    </div>
  )
}

export default DashboardPage
