import { Link } from 'react-router-dom';
import UserData from '../components/UserData';

export const Profile = () => (
  <div>
    <h2 >Profile page</h2>

    <p>
      <Link to="/">Back to home</Link>
    </p>
    <div>
      <UserData />
    </div>
  </div>
);
