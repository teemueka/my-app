import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <Router basename={basePath}>
      <div>
        <h1>My App</h1>
        <Home />
      </div>
    </Router>
  );
};

export default App;
