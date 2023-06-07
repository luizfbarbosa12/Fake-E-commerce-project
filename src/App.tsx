import { useEffect } from "react";
import "./styles/main.scss";
import axios from "axios";
import Card from "./components/molecules/Card";

function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return <div>
    <Card/>
  </div>;
}

export default App;
