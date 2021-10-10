import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderHeart extends Loader {
  bumpPosition = -24;
  tailSize = 32;
  transform(size: string, color: string) {
    const oldSizeInt = parseInt(this.size, 10);
    const newSizeInt = parseInt(size, 10);
    const percentage = (newSizeInt / oldSizeInt) * 100;
    const bumpPos = (this.bumpPosition * percentage) / 100;
    const tailSize = (this.tailSize * percentage) / 100;
    const changes: StyleChange[] = [
      {
        selector: '.lds-heart',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
          'transform-origin': `unset`,
        },
      },
      {
        selector: '.lds-heart div',
        replacements: {
          top: `${tailSize}px`,
          left: `${tailSize}px`,
          width: `${tailSize}px`,
          height: `${tailSize}px`,
        },
      },
      {
        selector: '.lds-heart div:after',
        replacements: {
          top: `${bumpPos}px`,
          left: `${bumpPos}px`,
          width: `${tailSize}px`,
          height: `${tailSize}px`,
        },
      },
      {
        selector: '.lds-heart div:before',
        replacements: {
          top: `${bumpPos}px`,
          left: `${bumpPos}px`,
          width: `${tailSize}px`,
          height: `${tailSize}px`,
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
    return new LoaderHeart({ ...this });
  }
}

export default LoaderHeart;
