import styles from "./SigninForm.module.css";
import Anchor from "../Anchor";
function SigninForm() {
  return (
    <form className={styles.formWrapper}>
      <section className={styles.formFields}>
        <div className={styles.formFieldWrapper}>
          <label>Email</label>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={styles.formFieldWrapper}>
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>
      </section>
      <section className={styles.formInteractions}>
        <Anchor className={styles.button}>Sign In</Anchor>
        <Anchor className={styles.githubButton}>Sign In with GitHub</Anchor>
        <span>
          <p>Dont have an account?</p>
          <Anchor>Sign up here</Anchor>
        </span>
      </section>
    </form>
  );
}

export default SigninForm;
