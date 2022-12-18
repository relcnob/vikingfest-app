import Head from "next/head";
import { useAuth } from "../hooks/useAuth";
import Image from "next/image";
import vikingfestlogo from "../public/vikingfest.svg";
import styles from "../components/index.module.css";
import SigninForm from "../components/forms/signin-form/SigninForm";
import SchedulePage from "../components/schedule/SchedulePage";
import Anchor from "../components/Anchor";

export default function Home() {
  const { signOut, auth } = useAuth();
  return (
    <div className={styles.index}>
      <Image src={vikingfestlogo} alt="logo" className={styles.logo}></Image>
      <div>
        {auth?.user ? (
          <>
            <button onClick={() => signOut()}>Signout</button>
            <Anchor href="schedule">View SchedulePage</Anchor>
          </>
        ) : (
          <>
            <SigninForm />
          </>
        )}
      </div>
    </div>
  );
}
