import "./App.css";
import Button from "./Button/Button";

const App = () => {
    return (
        <div className="container">
            <Button text="Click me!" onClick={() => console.log('Clicked!')} />
        </div>
    );
};

export default App;
