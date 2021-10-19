import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';

class LoaderCircle extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);

    const changes: StyleChange[] = [
      {
        selector: '.lds-circle > div',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
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
    return new LoaderCircle({ ...this });
  }
}

export default LoaderCircle;