// AddUserForm.jsx
import React, { useState } from "react";

const AddUserForm = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    company: {
      name: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      address: { ...prevUser.address, [name]: value },
    }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      company: { ...prevUser.company, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddUser(data);
        setNewUser({
          firstName: "",
          lastName: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
          },
          company: {
            name: "",
          },
        });
        console.log("success added");
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={newUser.address.street}
          onChange={handleAddressChange}
        />
      </label>
      <br />
      <label>
        Suite:
        <input
          type="text"
          name="suite"
          value={newUser.address.suite}
          onChange={handleAddressChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={newUser.address.city}
          onChange={handleAddressChange}
        />
      </label>
      <br />
      <label>
        Company Name:
        <input
          type="text"
          name="name"
          value={newUser.company.name}
          onChange={handleCompanyChange}
        />
      </label>
      <br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
