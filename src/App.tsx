import "./App.css";
import { account, client } from "./libs/appwrite";
import { supabase } from "./supabase/lib/supabaseClient";
import { OAuthProvider } from "appwrite";

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

  const loginWithGoogle = () => {
    account.createOAuth2Session(
      OAuthProvider.Google, // Provider
      "http://localhost:5173/auth/callback", // Redirect URL after logins
      "http://localhost:5173" // Redirect URL if user cancel login
    );
  };

  return (
    <>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </>
  );
}

export default App;
