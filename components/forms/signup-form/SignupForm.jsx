import styles from "./SignupForm.module.css";
import formStyles from "../Forms.module.css";
import Anchor from "../../Anchor";
import { useContext } from "react";
import { useAuth } from "../../../hooks/useAuth";
function SignupForm() {
  const { signUpWithPassword, loginWithGithub } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    const theForm = e.target;
    const formData = new FormData(theForm);
    const payload = {};
    let email, password;
    for (const [key, value] of formData) {
      if (key === "password") {
        password = value;
      } else if (key === "email") {
        email = value;
      } else {
        payload[key] = value;
      }
    }
    console.log(payload, email, password);
    signUpWithPassword(email, password, payload);
  }

  function handleGitHub(e) {
    e.preventDefault();
    loginWithGithub();
  }

  return (
    <form className={formStyles.formWrapper} onSubmit={handleSubmit} method="POST">
      <section className={formStyles.formFields}>
        <div className={formStyles.formFieldWrapper}>
          <label>First name</label>
          <input type="text" placeholder="First name" name="first_name"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Last name</label>
          <input type="text" placeholder="Last name" name="last_name"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Email</label>
          <input type="text" placeholder="Email" name="email"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password"></input>
        </div>
        {/* <div className={formStyles.formFieldWrapper}>
          <label>Confirm password</label>
          <input type="password" placeholder="Password" name="first_name"></input>
        </div> */}
      </section>
      <section className={formStyles.formInteractions}>
        <button className={styles.button}>Sign up</button>
        <button className={styles.githubButton} onClick={handleGitHub}>
          Sign up with GitHub
        </button>

        <span>
          <p>Already Signed Up?</p>
          <Anchor>Sign in here</Anchor>
        </span>
      </section>
    </form>
  );
}

export default SignupForm;
