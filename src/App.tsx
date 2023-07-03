import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import MainContent from './MainContent/MainContent';
import Button from './Button/Button';

const App = () => {
  return (
    <>
      <NavigationBar />
      <MainContent />      
      {/* <Button
        intent='add'
        text='Click me!'
        onClick={() => console.log('Clicked!')}
      /> */}
    </>
  );
};

export default App;
