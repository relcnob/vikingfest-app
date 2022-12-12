import BurgerMenu from "../../components/burger-menu/BurgerMenu";
import SignupForm from "../../components/forms/signup-form/SignupForm";
import NavBar from "../../components/nav-bar/NavBar";

function index() {
  return (
    <div style={{ background: "var(--primary-300)" }}>
      <SignupForm></SignupForm>
    </div>
  );
}

export default index;
