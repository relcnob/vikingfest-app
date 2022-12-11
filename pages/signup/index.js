import SignupForm from "../../components/forms/signup-form/SignupForm";
import NavBar from "../../components/nav-bar/NavBar";

function index() {
  return (
    <div style={{ background: "var(--primary-300)" }}>
      <SignupForm></SignupForm>
      <NavBar active="bands" />
    </div>
  );
}

export default index;
