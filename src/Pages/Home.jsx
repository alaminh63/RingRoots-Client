import AddUserForm from "@/components/home/AddUserForm";
import AllUser from "@/components/home/AllUser";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div>
      <AllUser users={users} />
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default Home;
