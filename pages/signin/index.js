import React from "react";
import SigninForm from "../../components/forms/signin-form/SigninForm";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import BurgerMenu from "../../components/burger-menu/BurgerMenu";

function index({ user }) {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <div style={{ background: "var(--primary-300)", paddingTop: "2rem", minHeight: "100vh" }}>
        <SigninForm />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/schedule",
        permanent: false,
      },
    };
  }
};

export default index;
