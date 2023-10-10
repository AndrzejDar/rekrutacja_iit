import { useSelector, useStore } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const isDarkTheme = useSelector((state) => state.app.darkTheme);
  // use class "'dark-mode' to change theme"
  return (
    <div className={!isDarkTheme ? "dark-mode" : ""}>
      <Header />
      <List />
    </div>
  );
}

export default App;
