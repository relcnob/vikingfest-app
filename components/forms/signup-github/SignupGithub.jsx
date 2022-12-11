import styles from "./SignupGithub.module.css";
import formStyles from "../Forms.module.css";
import Anchor from "../../Anchor";
function SigninForm() {
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
      </section>
      <section className={formStyles.formInteractions}>
        <Anchor className={styles.button}>Sign up</Anchor>
        <Anchor className={styles.skipButton}>Skip</Anchor>
      </section>
    </form>
  );
}

export default SigninForm;
