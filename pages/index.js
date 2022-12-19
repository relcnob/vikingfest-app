import Head from "next/head";
import { useAuth } from "../hooks/useAuth";
import Image from "next/image";
import vikingfestlogo from "../public/vikingfest.svg";
import styles from "../components/index.module.css";
import SigninForm from "../components/forms/signin-form/SigninForm";
import SchedulePage from "../components/schedule/SchedulePage";
import Anchor from "../components/Anchor";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/dist/server/api-utils";
export default function Home() {
  const { signOut, auth } = useAuth();

  /* Not needed as redirecting happens */

  return (
    <div className={styles.index}>
      <div>
        <Image src={vikingfestlogo} alt="logo" className={styles.logo}></Image>

        {auth?.user ? (
          <div className={styles.signedInSection}>
            <button onClick={() => signOut()}>Signout</button>
            <Anchor className={styles.button} href="schedule">
              View Schedule Page
            </Anchor>
          </div>
        ) : (
          <>
            <Image src={vikingfestlogo} alt="logo" className={styles.logo}></Image>

            <Anchor className={styles.button} href="signin">
              Sign In
            </Anchor>
            <Anchor className={styles.signUpButton} href="signup">
              Sign Up
            </Anchor>
          </>
        )}
      </div>
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

  if (!session)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  /*   else if (session)
    return {
      redirect: {
        destination: "/schedule",
        permanet: false,
      },
    }; */

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
