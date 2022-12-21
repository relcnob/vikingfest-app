import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import BurgerMenu from "../../components/burger-menu/BurgerMenu";
import SignupForm from "../../components/forms/signup-form/SignupForm";

function index() {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <div style={{ background: "var(--primary-300)", paddingTop: "2rem", minHeight: "100vh" }}>
        <SignupForm></SignupForm>
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
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default index;
