import "./App.css";
import Button from "./Button/Button";

const App = () => {
    return (
        <div className="container">
            <Button intent='add' text="Click me!" onClick={() => console.log('Clicked!')} />
        </div>
    );
};

export default App;
