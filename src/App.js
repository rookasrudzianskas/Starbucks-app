import './App.css';
import Header from "./components/Header";
import Announcment from "./components/Announcment";
import Rewards from "./components/Rewards";

function App() {
  return (
    <div className="app">
      <Header />
        <Announcment />
        <Rewards />
    </div>
  );
}

export default App;
