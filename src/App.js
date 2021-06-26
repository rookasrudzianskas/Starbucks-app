import './App.css';
import Header from "./components/Header";
import Announcment from "./components/Announcment";
import Rewards from "./components/Rewards";
import Chill from "./components/Chill";
import TopBottomSection from "./components/Top-BottomSection";
import Footer from "./components/Footer";
import End from "./components/End";
import Empty from "./components/Empty";

function App() {
  return (
    <div className="app">
      <Header />
        <Announcment />
        <Rewards />
      <Chill />
        <TopBottomSection />
        <End />
        <Empty />
        <Footer />
    </div>
  );
}

export default App;
