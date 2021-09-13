import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";
import ProductForm from "./components/ProductForm";
import { useSelector } from "react-redux";

function App() {
  const loginState = useSelector((state) => state.login.login);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {loginState ? <HomePage /> : <Login />}
        </Route>
        <Route exact path="/add">
          <ProductForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
