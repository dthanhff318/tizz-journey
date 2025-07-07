import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase/lib/supabaseClient";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Exchange code for session
        const { error } = await supabase.auth.exchangeCodeForSession(window.location.search);
        
        if (error) {
          console.error("Error during auth callback:", error);
          navigate("/");
        } else {
          // Successfully authenticated, redirect to dashboard
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        navigate("/");
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;