import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [id]);
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-4">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-32 object-cover mb-4 rounded"
        />
        <div className="mb-2">
          <p className="text-lg font-bold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-800">{user.address?.address}</p>
          <p className="text-gray-800">
            {user.address?.city}, {user.address?.state}
          </p>
        </div>
        <p className="text-gray-700">{user.company?.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
