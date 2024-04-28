import useForm from '../hooks/formHooks';
import { useUserContext } from '../contexts/UserContext';

const LoginForm = () => {
  const {handleLogin} = useUserContext()

  const initValues = {
    username: '',
    password: '',
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    () => handleLogin(inputs),
    initValues,
  );

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
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
