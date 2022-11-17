//import css
import './ThemeSelector.css';

//import icon
import modeIcon from '../assets/mode-icon.svg';

//import custome hook
import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const handleModeChange = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='theme-selector'>
      <div className='toggle-mode'>
        <img
          src={modeIcon}
          alt='mode-toggling-icon'
          onClick={handleModeChange}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => {
          return (
            <div
              key={color}
              style={{ background: color }}
              onClick={() => changeColor(color)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector;
