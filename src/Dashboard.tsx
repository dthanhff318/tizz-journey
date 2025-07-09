// Dashboard.jsx
import { useEffect, useState } from "react";
import { account } from "./libs/appwrite";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await account.get();
      setUser(user);
    };
    getUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <div>
        <button
          onClick={async () => {
            await account.deleteSession("current");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
