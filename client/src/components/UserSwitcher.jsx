// Component: components/UserSwitcher.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/usersSlice";

const users = [
  { username: "john_doe", displayName: "John Doe" },
  { username: "jane_smith", displayName: "Jane Smith" },
  { username: "bob_brown", displayName: "Bob Brown" },
  { username: "alice_johnson", displayName: "Alice Johnson" },
  { username: "charlie_davis", displayName: "Charlie Davis" },
];

const UserSwitcher = () => {
  const dispatch = useDispatch();

  const handleSelectUser = (user) => {
    console.log("User:", user)
    dispatch(setCurrentUser(user));
  };

  return (
    <div className="relative group">
      <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">
        Switch User
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-md border rounded-md mt-1 w-48 z-10">
        {users.map((user) => (
          <div
            key={user.username}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelectUser(user)}
          >
            @{user.username}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSwitcher;
