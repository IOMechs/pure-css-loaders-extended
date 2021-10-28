import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderDefault extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    const ChildrenSize = (7.5 / 100) * newSizeInt;
    const childInitialPosition37 = (46.25 / 100) * newSizeInt;
    const childInitialPosition66 = (82.5 / 100) * newSizeInt;
    const childInitialPosition22 = (27.5 / 100) * newSizeInt;
    const childInitialPosition62 = (77.5 / 100) * newSizeInt;
    const childInitialPosition11 = (13.75 / 100) * newSizeInt;
    const childInitialPosition52 = (65 / 100) * newSizeInt;
    const childInitialPosition7 = (8.75 / 100) * newSizeInt;

    const changes: StyleChange[] = [
      {
        selector: '.lds-default',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-default div',
        replacements: {
          width: `${ChildrenSize}px`,
          height: `${ChildrenSize}px`,
          background: `${color}`,
        },
      },
      {
        selector: '.lds-default div:nth-child(1)',
        replacements: {
          top: `${childInitialPosition37}px`,
          left: `${childInitialPosition66}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(2)',
        replacements: {
          top: `${childInitialPosition22}px`,
          left: `${childInitialPosition62}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(3)',
        replacements: {
          top: `${childInitialPosition11}px`,
          left: `${childInitialPosition52}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(4)',
        replacements: {
          top: `${childInitialPosition7}px`,
          left: `${childInitialPosition37}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(5)',
        replacements: {
          top: `${childInitialPosition11}px`,
          left: `${childInitialPosition22}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(6)',
        replacements: {
          top: `${childInitialPosition22}px`,
          left: `${childInitialPosition11}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(7)',
        replacements: {
          top: `${childInitialPosition37}px`,
          left: `${childInitialPosition7}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(8)',
        replacements: {
          top: `${childInitialPosition52}px`,
          left: `${childInitialPosition11}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(9)',
        replacements: {
          top: `${childInitialPosition62}px`,
          left: `${childInitialPosition22}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(10)',
        replacements: {
          top: `${childInitialPosition66}px`,
          left: `${childInitialPosition37}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(11)',
        replacements: {
          top: `${childInitialPosition62}px`,
          left: `${childInitialPosition52}px`,
        },
      },
      {
        selector: '.lds-default div:nth-child(12)',
        replacements: {
          top: `${childInitialPosition52}px`,
          left: `${childInitialPosition62}px`,
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
    return new LoaderDefault({ ...this });
  }
}

export default LoaderDefault;
