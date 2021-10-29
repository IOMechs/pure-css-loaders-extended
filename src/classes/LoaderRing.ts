import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderRing extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    const borderWidth = (10 / 100) * newSizeInt;
    const changes: StyleChange[] = [
      {
        selector: '.lds-ring',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-ring div',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
          border: `${borderWidth}px solid ${color}`,
          'border-color': `${color} transparent transparent transparent`,
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
    return new LoaderRing({ ...this });
  }
}

export default LoaderRing;
