import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;
