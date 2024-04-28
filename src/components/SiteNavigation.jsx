import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

const SiteNavigation = () => {
  const { user, handleLogout } = useUserContext()
  console.log("user", user)
  return (
    <nav>
      <Link to="/">Etusivu</Link>
      {user !== undefined && <>
        <Link to="/profile">Profiili</Link>
        <Link to="/upload">Upload</Link>
        <button onClick={handleLogout} >Logout</button>
      </>}
      {!user && <Link to="/login">Login</Link>}
    </nav>
  );
}

export default SiteNavigation;
