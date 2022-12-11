import styles from "./SigninForm.module.css";
import formStyles from "../Forms.module.css";
import Anchor from "../../Anchor";
function SigninForm() {
  return (
    <form className={formStyles.formWrapper}>
      <section className={formStyles.formFields}>
        <div className={formStyles.formFieldWrapper}>
          <label>Email</label>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={formStyles.formFieldWrapper}>
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>
      </section>
      <section className={formStyles.formInteractions}>
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
