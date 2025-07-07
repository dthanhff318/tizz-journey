import { supabase } from "./supabase/lib/supabaseClient";

const Dashboard = () => {
  const data = supabase.auth.getUser();
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
