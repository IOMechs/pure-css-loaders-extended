import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
class LoaderFacebook extends Loader {
  transform(size: string, color: string) {
    const newSizeInt = parseInt(size, 10);

    const keyFrame0top = newSizeInt*0.1;
    const keyFrame0height = newSizeInt - keyFrame0top*2;
    const keyFrame100height = keyFrame0height/2;
    const keyFrame100top = (newSizeInt - keyFrame100height)/2;

    const ruleChanges: StyleChange[] = [
      {
        selector: '.lds-facebook',
        replacements: {
          width: `${newSizeInt}px`,
          height: `${newSizeInt}px`,
        },
      },
      {
        selector: '.lds-facebook div',
        replacements: {
          width: `${newSizeInt * 0.2}px`,
        },
      },
      {
        selector: '.lds-facebook div:nth-child(1)',
        replacements: {
          left: `${newSizeInt * 0.1}px`,
        },
      },
      {
        selector: '.lds-facebook div:nth-child(2)',
        replacements: {
          left: `${newSizeInt * 0.4}px`,
        },
      },
      {
        selector: '.lds-facebook div:nth-child(3)',
        replacements: {
          left: `${(newSizeInt * 0.7).toFixed(1)}px`,
        },
      },
    ];
    let replacedStyles = super.replaceStyles(ruleChanges, false);

    const keyframesChanges: StyleChange[] = [
        {
            selector: 'lds-facebook',
            replacements: {
                '0%': {
                    top: `${keyFrame0top}px`,
                    height: `${keyFrame0height}px`,
                },
                '100%': {
                    top: `${keyFrame100top}px`,
                    height: `${keyFrame100height}px`
                },
            },
        },
    ];
    const replacedKeyframes = super.replaceKeyframeStyles(keyframesChanges);
    replacedStyles += '\n\n' + replacedKeyframes;

    return {
      ...this,
      cssRules: replacedStyles,
    };
  }
  clone() {
    return new LoaderFacebook({ ...this });
  }
}

export default LoaderFacebook;
