import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderDualRing extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);

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
