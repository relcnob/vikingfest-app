import styles from "./SignupForm.module.css";
import formStyles from "../Forms.module.css";
import Anchor from "../../Anchor";
function SignupForm() {
  return (
    <form className={formStyles.formWrapper}>
      <section className={formStyles.formFields}>
        <div className={formStyles.formFieldWrapper}>
          <label>First name</label>
          <input type="text" placeholder="First name"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Last name</label>
          <input type="text" placeholder="Last name"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Email</label>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Confirm password</label>
          <input type="password" placeholder="Password"></input>
        </div>
      </section>
      <section className={formStyles.formInteractions}>
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
