// Component: components/Header.jsx
import UserSwitcher from "./UserSwitcher";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.users.currentUser);
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex items-center gap-4">
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md">
          Export
        </button>
        <UserSwitcher />
        <Avatar username={user?.displayName || "Username"} />
      </div>
    </header>
  );
};

export default Header;