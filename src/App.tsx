import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import Button from "./Button/Button";

const App = () => {
  return (
    <>
      <NavigationBar />
      
      <Button
        intent="add"
        text="Click me!"
        onClick={() => console.log("Clicked!")}
      />
    </>
  );
};

export default App;
