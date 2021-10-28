import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderHourglass extends Loader {
  bumpPosition = -24;
  tailSize = 32;
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    const changes: StyleChange[] = [
      {
        selector: '.lds-hourglass',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-hourglass:after',
        replacements: {
          border: `${newSizeInt / 2}px solid ${color}`,
          'border-color': `${color} transparent ${color} transparent`,
        },
      },
    ];
    const replacedStyles = super.replaceStyles(changes);
    return {
      ...this,
      cssRules: replacedStyles,
    };
  }
  clone() {
    return new LoaderHourglass({ ...this });
  }
}

export default LoaderHourglass;
