import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderDualRing extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    const borderWidth = (9.375 / 100) * newSizeInt;

    const changes: StyleChange[] = [
      {
        selector: '.lds-dual-ring',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-dual-ring:after',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
          border: `${borderWidth}px solid ${color}`,
          'border-color': `${color} transparent ${color} transparent`,
        },
      },
    ];
    let replacedStyles = super.replaceStyles(changes);

    return {
      ...this,
      cssRules: replacedStyles,
    };
  }

  clone() {
    return new LoaderDualRing({ ...this });
  }
}

export default LoaderDualRing;
