import { useEffect } from "react";
import "./styles/main.scss";
import axios from "axios";
import Router from "./Router/Router";

const App = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
