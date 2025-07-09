import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "./libs/appwrite";
import { account } from "./libs/appwrite";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ensureUserDocument = async () => {
      const user = await account.get();
      console.log(user);

      try {
        // Check if user has a document
        const checkUser = await databases.getDocument(
          "tj-dev-318",
          "users",
          user.$id
        );
        console.log("checkUser", checkUser);
        if (!checkUser) {
          await databases.createDocument("tj-dev-318", "users", user.$id, {
            name: user.name,
          });
        }
      } catch (error) {
        console.log("Something went wrong", error);
      } finally {
        navigate("/dashboard");
      }
    };

    ensureUserDocument();
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;
