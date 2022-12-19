import styles from "./SigninForm.module.css";
import formStyles from "../Forms.module.css";
import Anchor from "../../Anchor";
import Router from "next/router";
import { useContext } from "react";
import { useAuth } from "../../../hooks/useAuth";
function SigninForm() {
  const { auth, loginWithPassword, loginWithGithub } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    const theForm = e.target;
    const formData = new FormData(theForm);
    let email, password;
    for (const [key, value] of formData) {
      if (key === "password") {
        password = value;
      } else if (key === "email") {
        email = value;
      }
    }

    const data = await loginWithPassword(email, password);
    if (!data.user) {
      console.log("Wrong credentials");
    } else {
      Router.push("/schedule");
    }
  }
  async function handleGithub(e) {
    e.preventDefault();
    loginWithGithub();
  }

  return (
    <>
      <form className={formStyles.formWrapper} onSubmit={handleSubmit} method="POST">
        <section className={formStyles.formFields}>
          <div className={formStyles.formFieldWrapper}>
            <label>Email</label>
            <input type="text" placeholder="Email" name="email"></input>
          </div>
          <div className={formStyles.formFieldWrapper}>
            <label>Password</label>
            <input type="password" placeholder="Password" name="password"></input>
          </div>
        </section>
        <section className={formStyles.formInteractions}>
          <button className={styles.button}>Sign in</button>
          <button className={styles.githubButton} onClick={handleGithub}>
            Sign in with Github
          </button>

          <span>
            <p>Dont have an account?</p>
            <Anchor href={"/signup"}>Sign up here</Anchor>
          </span>
        </section>
      </form>
    </>
  );
}

export default SigninForm;
