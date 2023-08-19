import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <header className="nav-bar">
      <div className="nav-item">
        LOGO
      </div>
      <div className="nav-item">
        BROWSE
      </div>
      <div className="nav-item">
        ...
      </div>

      <div className="nav-fill-space"></div>

      <div className="nav-item nav-optional">
        <SearchBar />
      </div>

      <div className="nav-fill-space"></div>

      <div className="nav-item">
        Log In
      </div>

      <div className="nav-item">
        <Button text="Sign In" />
      </div>
    </header>
  );
};

export default NavigationBar;
