import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">User List</h1>
      <UserList users={users} />
    </div>
  );
};

export default AllUser;
