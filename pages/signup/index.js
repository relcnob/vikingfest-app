import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import BurgerMenu from "../../components/burger-menu/BurgerMenu";
import SignupForm from "../../components/forms/signup-form/SignupForm";
import NavBar from "../../components/nav-bar/NavBar";

function index() {
  return (
    <div style={{ background: "var(--primary-300)" }}>
      <SignupForm></SignupForm>
    </div>
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
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default index;
