import Head from "next/head";
import { useAuth } from "../hooks/useAuth";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
export default function Home() {
  const { signOut, auth } = useAuth();
  return <div>Hello</div>;
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return {
    redirect: {
      destination: "/schedule",
      permanent: false,
    },
  };
};
