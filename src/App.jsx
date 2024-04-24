import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './views/Layout';
import Home from './views/Home';
import Upload from "./views/Upload.jsx";
import Single from "./views/Single.jsx";
import Profile from "./views/Profile.jsx";
import Login from "./views/Login.jsx";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
