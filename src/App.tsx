import "./App.css";
import { supabase } from "./supabase/lib/supabaseClient";

function App() {
  return (
    <>
      <button
        onClick={() =>
          supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: "http://localhost:5173/dashboard",
            },
          })
        }
      >
        Sign in with Google1
      </button>
    </>
  );
}

export default App;
