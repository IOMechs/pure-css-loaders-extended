import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';
import KeyframeChange from '../Interfaces/KeyframeChange';

class LoaderRipple extends Loader {
    transform(size: string, color: string) {
        const newSizeInt = parseInt(size, 10);
    
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
                border: `${newSizeInt * 0.05}px solid ${color}`,
            },
          },
        ];
        let replacedStyles = super.replaceStyles(changes);
    
        const keyframesChanges: KeyframeChange[] = [
          {
            selector: 'lds-ripple',
            replacements: {
              '0%': {
                top: `${newSizeInt * 0.5}px`,
                left: `${newSizeInt * 0.5}px`,
              },
              '100%': {
                width: `${newSizeInt}px`,
                height: `${newSizeInt}px`,
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