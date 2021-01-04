import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Routing from "./Components/Routing";

import LogRocket from "logrocket";
LogRocket.init("7uic5b/fishgame");

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
