import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PersistentDrawerLeft from "./components/sideBar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <PersistentDrawerLeft></PersistentDrawerLeft>
        </div>
    );
}

export default App;
