import styles from "./SignupForm.module.css";
import Anchor from "../Anchor";
function SignupForm() {
  return (
    <form className={styles.formWrapper}>
      <section className={styles.formFields}>
        <div className={styles.formFieldWrapper}>
          <label>First name</label>
          <input type="text" placeholder="First name"></input>
        </div>
        <div className={styles.formFieldWrapper}>
          <label>Last name</label>
          <input type="text" placeholder="Last name"></input>
        </div>
        <div className={styles.formFieldWrapper}>
          <label>Email</label>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={styles.formFieldWrapper}>
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className={styles.formFieldWrapper}>
          <label>Confirm password</label>
          <input type="password" placeholder="Password"></input>
        </div>
      </section>
      <section className={styles.formInteractions}>
        <Anchor className={styles.button}>Sign Up</Anchor>
        <Anchor className={styles.githubButton}>Sign Up with GitHub</Anchor>
        <span>
          <p>Already Signed Up?</p>
          <Anchor>Sign in here</Anchor>
        </span>
      </section>
    </form>
  );
}

export default SignupForm;
