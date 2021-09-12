import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router";
import { useState } from "react";
import HomePage from "./components/HomePage";
import ProductForm from "./components/ProductForm";

function App() {
  const [isLoggeIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {isLoggeIn ? (
            <HomePage userName={userName} setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Login setUserName={setUserName} setIsLoggedIn={setIsLoggedIn} />
          )}
        </Route>
        <Route exact path="/add">
          <ProductForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
