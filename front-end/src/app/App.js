import { Provider } from "react-redux"; //permet de rendre le store disponible dans l'application
import { store } from "./store";
import "./App.css";

function App() {
    return (
        <Provider store={store}></Provider>
    )
}

export default App