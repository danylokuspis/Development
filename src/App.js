import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Onemore from './onemore';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <div className="onemore">
        <Onemore />
      </div>
      </div>
    </div>
  );
}

export default App;
