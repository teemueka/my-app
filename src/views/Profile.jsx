import {useUser} from "../hooks/ApiHooks.js";
import {useEffect, useState} from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
      setUser(userData.user);
    };
    getUser();
  }, []);

  return (<div>
    <h2>PROFILE PAGE</h2>
    <div>
      {user && (
        <>
          <p>Käyttäjätunnus: {user.username}</p>
          </>
      )}
    </div>
    </div>
  )
}

export default Profile;
