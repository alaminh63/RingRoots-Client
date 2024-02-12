// AddUserForm.jsx
import React, { useState } from "react";
import "./AddUserForm.css";
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
    <div className="border max-w-4xl mx-auto rounded-lg shadow-2xl">
      <div className="flex justify-center">
        <customTitle className="text-4xl font-bold text-center my-8">
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;AddUser&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;AddUser&nbsp;
            </span>
          </button>
        </customTitle>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-2">
          <div>
            <input
              placeholder="First Name"
              className="input p-2 border border-gray-300  rounded"
              type="text"
              name="firstName"
              value={newUser.firstName}
              onChange={handleInputChange}
            />

            <input
              placeholder="Last Name"
              className="input p-2 border border-gray-300  rounded"
              type="text"
              name="lastName"
              value={newUser.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              className="input p-2 border border-gray-300  rounded"
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
            />

            <input
              placeholder="Street"
              className="input p-2 border border-gray-300  rounded"
              type="text"
              name="street"
              value={newUser.address.street}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <input
              placeholder="Suite"
              className="input p-2 border border-gray-300  rounded"
              type="text"
              name="suite"
              value={newUser.address.suite}
              onChange={handleAddressChange}
            />

            <input
              placeholder="City"
              className="input p-2 border border-gray-300  rounded"
              type="text"
              name="city"
              value={newUser.address.city}
              onChange={handleAddressChange}
            />

            <input
              placeholder="Company Name"
              className="input p-2 border border-gray-300  rounded"
              type="text"
              name="name"
              value={newUser.company.name}
              onChange={handleCompanyChange}
            />
          </div>
          <customHover>
          <button className="my-8" id="btn">Add User</button>

          </customHover>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
