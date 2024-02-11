import React, { useState } from "react";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    companyName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to add a new user
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {/* Form fields go here */}
    </form>
  );
};

export default AddUserForm;
