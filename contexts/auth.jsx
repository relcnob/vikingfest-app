import { useState, useEffect, createContext, useContext } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const AuthContext = createContext(undefined);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState(null);
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      setAuth(session);
    });

    if (!auth) {
      supabaseClient.auth.getSession().then((response) => {
        if (!response.data.session) return;

        setAuth(response.data.session);
      });
    }
  }, []);

  const loginWithGithub = async () => {
    try {
      await supabaseClient.auth.signInWithOAuth({
        provider: "github",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const loginWithPassword = async (email, password) => {
    try {
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = async () => {
    try {
      await supabaseClient.auth.signOut();
    } catch (e) {
      console.error(e);
    }
  };

  const signUpWithPassword = async (email, password, payload) => {
    try {
      await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: payload,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const value = { auth, loginWithPassword, loginWithGithub, signOut, signUpWithPassword };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
