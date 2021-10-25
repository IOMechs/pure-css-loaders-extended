import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderGrid extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    const ChildrenSize = (20 / 100) * newSizeInt;
    const childInitialPosition8 = (10 / 100) * newSizeInt;
    const childInitialPosition32 = (40 / 100) * newSizeInt;
    const childInitialPosition56 = (70 / 100) * newSizeInt;

    const changes: StyleChange[] = [
      {
        selector: '.lds-grid',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-grid div',
        replacements: {
          width: `${ChildrenSize}px`,
          height: `${ChildrenSize}px`,
          background: `${color}`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(1)',
        replacements: {
          top: `${childInitialPosition8}px`,
          left: `${childInitialPosition8}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(2)',
        replacements: {
          top: `${childInitialPosition8}px`,
          left: `${childInitialPosition32}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(3)',
        replacements: {
          top: `${childInitialPosition8}px`,
          left: `${childInitialPosition56}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(4)',
        replacements: {
          top: `${childInitialPosition32}px`,
          left: `${childInitialPosition8}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(5)',
        replacements: {
          top: `${childInitialPosition32}px`,
          left: `${childInitialPosition32}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(6)',
        replacements: {
          top: `${childInitialPosition32}px`,
          left: `${childInitialPosition56}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(7)',
        replacements: {
          top: `${childInitialPosition56}px`,
          left: `${childInitialPosition32}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(8)',
        replacements: {
          top: `${childInitialPosition56}px`,
          left: `${childInitialPosition8}px`,
        },
      },
      {
        selector: '.lds-grid div:nth-child(9)',
        replacements: {
          top: `${childInitialPosition56}px`,
          left: `${childInitialPosition56}px`,
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
    return new LoaderGrid({ ...this });
  }
}

export default LoaderGrid;
