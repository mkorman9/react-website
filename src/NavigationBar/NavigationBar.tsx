import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <header className="nav-bar">
      <div className="nav-links">
        <div className="nav-item">
          LOGO
        </div>
        <div className="nav-item">
          BROWSE
        </div>
        <div className="nav-item">
          ...
        </div>
      </div>

      <div className="nav-search">
        <div className="nav-optional">
          <SearchBar />
        </div>
      </div>

      <div className="nav-login">
        <div className="nav-item">
          <a href="#">Log In</a>
        </div>

        <div className="nav-item">
          <Button text="Sign In" />
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
