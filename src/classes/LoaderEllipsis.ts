import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
import KeyframeChange from '../Interfaces/KeyframeChange';
class LoaderEllipsis extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);
    const ChildrenSize = (16.25 / 100) * newSizeInt;
    const alignChildrenCenter = newSizeInt / 2 - ChildrenSize / 2;
    const child1left = (10 / 100) * newSizeInt;
    const child3left = (40 / 100) * newSizeInt;
    const child4left = (70 / 100) * newSizeInt;
    const child2translate = (30 / 100) * newSizeInt;

    const changes: StyleChange[] = [
      {
        selector: '.lds-ellipsis',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-ellipsis div',
        replacements: {
          width: `${ChildrenSize}px`,
          height: `${ChildrenSize}px`,
          top: `${alignChildrenCenter}px`,
          background: `${color}`,
        },
      },
      {
        selector: '.lds-ellipsis div:nth-child(1)',
        replacements: {
          left: `${child1left}px`,
        },
      },
      {
        selector: '.lds-ellipsis div:nth-child(2)',
        replacements: {
          left: `${child1left}px`,
        },
      },
      {
        selector: '.lds-ellipsis div:nth-child(3)',
        replacements: {
          left: `${child3left}px`,
        },
      },
      {
        selector: '.lds-ellipsis div:nth-child(4)',
        replacements: {
          left: `${child4left}px`,
        },
      },
    ];
    let replacedStyles = super.replaceStyles(changes);

    const keyframesChanges: KeyframeChange[] = [
      {
        selector: 'lds-ellipsis2',
        replacements: {
          '100%': {
            transform: `translate(${child2translate}px,0)`,
          },
        },
      },
    ];
    replacedStyles = super.replaceKeyframeStyles(
      keyframesChanges,
      replacedStyles
    );

    return {
      ...this,
      cssRules: replacedStyles,
    };
  }
  clone() {
    return new LoaderEllipsis({ ...this });
  }
}

export default LoaderEllipsis;
