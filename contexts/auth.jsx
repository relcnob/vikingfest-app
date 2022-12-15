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
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });
    return data;
  };

  const loginWithPassword = async (email, password) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return data;
  };

  const signOut = async () => {
    const { data, error } = await supabaseClient.auth.signOut();
    return data;
  };

  const signUpWithPassword = async (email, password, payload) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: {
        data: payload,
      },
    });

    return data;
  };

  const value = { auth, loginWithPassword, loginWithGithub, signOut, signUpWithPassword, supabaseClient };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
