import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../components/Home";
import Menu from "../components/Menu";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
