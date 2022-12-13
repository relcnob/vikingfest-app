import Head from "next/head";
import { useAuth } from "../hooks/useAuth";
export default function Home() {
  const { signOut, auth } = useAuth();
  return <div>{auth?.user ? <button onClick={() => signOut()}>Signout</button> : null}</div>;
}
