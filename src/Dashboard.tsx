// Dashboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "./supabase/lib/supabaseClient";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);

        // Lấy thông tin từ bảng users
        const { data: profile, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profile) {
          setUserProfile(profile);
        }
      }
      setLoading(false);
    };

    getUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    // Redirect to login if not authenticated
    window.location.href = "/login";
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Welcome, {userProfile?.full_name || user.email}!</h2>
        <img src={userProfile?.avatar_url} alt="Avatar" />
        <p>Email: {userProfile?.email}</p>
        <p>Created: {userProfile?.created_at}</p>
      </div>
    </div>
  );
};

export default Dashboard;
