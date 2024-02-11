const UserList = ({ users }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded p-4">
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
              <p className="text-gray-800">{user.address.address}</p>
              <p className="text-gray-800">
                {user.address.city}, {user.address.state}
              </p>
            </div>
            <p className="text-gray-700">{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
