import Header from "./components/Header";
import Notes from "./components/Notes";
import "../src/css/App.css";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
