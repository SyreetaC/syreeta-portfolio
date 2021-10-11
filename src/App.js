import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";
import Footer from "./components/Footer/Footer";

import "./App.css";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
