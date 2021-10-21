import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
import KeyframeChange from '../Interfaces/KeyframeChange';
class LoaderRipple extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);

    const keyFrameTop0 = newSizeInt / 2;
    const keyFrameHeight100 = newSizeInt;

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
            top: `${keyFrameTop0}px`,
            left: `${keyFrameTop0}px`,
            height: '0px',
            width: '0px',
          },
          '100%': {
            top: '0px',
            left: '0px',
            height: `${keyFrameHeight100}px`,
            width: `${keyFrameHeight100}px`,
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
