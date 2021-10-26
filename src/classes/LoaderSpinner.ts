import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderSpinner extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    console.log(newSizeInt);
    const changes: StyleChange[] = [
      {
        selector: '.lds-spinner',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-spinner div',
        replacements: {
          'transform-origin': `${newSizeInt / 2}px ${newSizeInt / 2}px`,
        },
      },
      {
        selector: '.lds-spinner div:after',
        replacements: {
          width: `${(6 / 80) * newSizeInt}px`,
          height: `${(18 / 80) * newSizeInt}px`,
          left: `${(37 / 80) * newSizeInt}px`,
          top: `${(3 / 80) * newSizeInt}px`,
          background: color,
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
    return new LoaderSpinner({ ...this });
  }
}

export default LoaderSpinner;
