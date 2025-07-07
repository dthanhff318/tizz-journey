import "./App.css";
import { supabase } from "./supabase/lib/supabaseClient";

function App() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </>
  );
}

export default App;
