import './App.scss';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
    </div>
  );
}

export default App;
