// LoginForm.jsx
import useForm from "../hooks/formHooks.js";
import {useAuthentication} from "../hooks/ApiHooks.js";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const {login} = useAuthentication();
  const navigate = useNavigate();
  const initValues = {
    username: '',
    password: ''
  }

  const doLogin = async () => {
    console.log('doLogin', inputs)
    try {
      const userData = await login(inputs);
      console.log('doLogin', userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (error) {
      console.log('error logging in', error.message)
    }
  }

  const {handleSubmit, handleInputChange, inputs} = useForm(doLogin, initValues);

  console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
