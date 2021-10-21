import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
import KeyframeChange from '../Interfaces/KeyframeChange';
class LoaderRipple extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);

    const keyFrame0top = newSizeInt / 2;
    const keyFrame100height = newSizeInt;

    const changes: StyleChange[] = [
      {
        selector: '.lds-ripple',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-ripple div',
        replacements: {
          border: `4px solid ${color}`,
        },
      },
    ];
    let replacedStyles = super.replaceStyles(changes);

    const keyframesChanges: KeyframeChange[] = [
      {
        selector: 'lds-ripple',
        replacements: {
          '0%': {
            top: `${keyFrame0top}px`,
            left: `${keyFrame0top}px`,
            height: '0px',
            width: '0px',
          },
          '100%': {
            top: '0px',
            left: '0px',
            height: `${keyFrame100height}px`,
            width: `${keyFrame100height}px`,
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
    return new LoaderRipple({ ...this });
  }
}

export default LoaderRipple;
