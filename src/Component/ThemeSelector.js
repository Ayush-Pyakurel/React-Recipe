//import css
import './ThemeSelector.css';

//import custome hook
import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
  const { changeColor } = useTheme();

  return (
    <div className='theme-selector'>
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
