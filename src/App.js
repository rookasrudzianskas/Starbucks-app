import './App.css';
import Header from "./components/Header";
import Announcment from "./components/Announcment";
import Rewards from "./components/Rewards";
import Chill from "./components/Chill";
import TopBottomSection from "./components/Top-BottomSection";
import Footer from "./components/Footer";
import End from "./components/End";

function App() {
  return (
    <div className="app">
      <Header />
        <Announcment />
        <Rewards />
      <Chill />
        <TopBottomSection />
        <End />
        <Footer />
    </div>
  );
}

export default App;
