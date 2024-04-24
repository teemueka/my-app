import RegisterForm from "../components/RegisterForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import {useState} from "react";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      {toggleForm ? <LoginForm/> : <RegisterForm/>}
      <button onClick={toggle}>
        {toggleForm ? 'Register' : 'Login'}
      </button>
    </>
  );
};

export default Login;
