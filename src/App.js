import { useEffect } from "react";
import Axios from "axios";
import { useFetchData } from "./hooks/myHooks";
import "./styles.css";

export default function App() {
  const [todoFetch, _todoFetch] = useFetchData();

  async function onGetData() {
    try {
      _todoFetch.onLoading();
      const data = await Axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.data);
      console.log(data);
      _todoFetch.onSuccess(data);
    } catch (error) {
      _todoFetch.onError("Request failed!");
    }
  }

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>Creating Custom Hooks</h2>
      <hr />

      <div>{todoFetch.status}</div>
      {todoFetch.status === "loading" && <div>Loading</div>}
      {todoFetch.status === "success" && <div>{todoFetch.data.title}</div>}
      {todoFetch.status === "loading" && <div>{todoFetch.error}</div>}
    </div>
  );
}
