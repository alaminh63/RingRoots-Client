import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import "./AllUser.css";

const AllUser = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Sort users based on selected option
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOption === "name") {
      return `${a.firstName} ${a.lastName}`.localeCompare(
        `${b.firstName} ${b.lastName}`
      );
    } else if (sortOption === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortOption === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
    return 0;
  });

  return (
    <div className="">
      <div className="flex justify-center ">
        <customTitle className="text-4xl font-bold text-center my-8">
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;Users&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;Users&nbsp;
            </span>
          </button>
        </customTitle>
      </div>
      <div className="flex justify-center gap-4 items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="input p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 border text-white border-gray-300 rounded input"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by Company name</option>
        </select>
      </div>
      <UserList users={sortedUsers} />
    </div>
  );
};

export default AllUser;
