import {useUser} from "../hooks/ApiHooks.js";
import {useEffect, useState} from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = await getUserByToken(token);
        setUser(userData.user);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return (<div>
    <h2>PROFILE PAGE</h2>
    <div>
      {user && (
        <>
          <p>Käyttäjätunnus: {user.username} </p>
          <p>email: {user.email} </p>
          <p>luotu: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
        </>
      )}
    </div>
    </div>
  )
}

export default Profile;
