import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router";
import { useState } from "react";
import HomePage from "./components/HomePage";
import ProductForm from "./components/ProductForm";
import { useSelector } from "react-redux";

function App() {
  const [userName, setUserName] = useState("");
  const loginState = useSelector((state) => state.login.login);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {loginState ? (
            <HomePage userName={userName} />
          ) : (
            <Login setUserName={setUserName} />
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
