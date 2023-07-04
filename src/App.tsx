import './App.css';
import ContextProviders from './ContextProviders';
import NavigationBar from './NavigationBar/NavigationBar';
import MainContent from './MainContent/MainContent';

const App = () => {
  return (
    <ContextProviders>
      <NavigationBar />
      <MainContent />
    </ContextProviders>
  );
};

export default App;
