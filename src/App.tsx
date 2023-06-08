import "./styles/main.scss";
import Router from "./Router/Router";
import Products from "./contexts/Products";

const App = () => {
 
  return (
    <div>
      <Products>
        <Router />
      </Products>
    </div>
  );
};

export default App;
