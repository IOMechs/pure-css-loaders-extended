import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';

class LoaderRoller extends Loader {
    transform(size: string, color: string) {
        const oldSizeInt = parseInt(this.size, 10);
        const newSizeInt = parseInt(size, 10);
        const sizeRatio = (newSizeInt / oldSizeInt);
        const pointSize = newSizeInt * 0.0875;
        const transformValue = newSizeInt/2;

        const changes: StyleChange[] = [
            {
                selector: '.lds-roller',
                replacements: {
                    width: `${newSizeInt}px`,
                    height: `${newSizeInt}px`,
                },
            },
            {
                selector: '.lds-roller div',
                replacements: {
                    'transform-origin': `${transformValue}px ${transformValue}px`,
                },
            },
            {
                selector: '.lds-roller div:after',
                replacements: {
                    background: color,
                    width: `${pointSize}px`,
                    height: `${pointSize}px`,
                    margin: '0px',
                },
            },
            {
                selector: '.lds-roller div:nth-child(1):after',
                replacements: {
                    top: `${sizeRatio * 61}px`,
                    left: `${sizeRatio * 63}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(2):after',
                replacements: {
                    top: `${sizeRatio * 67.3}px`,
                    left: `${sizeRatio * 56}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(3):after',
                replacements: {
                    top: `${sizeRatio * 71}px`,
                    left: `${sizeRatio * 48.3}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(4):after',
                replacements: {
                    top: `${sizeRatio * 72.5}px`,
                    left: `${sizeRatio * 40}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(5):after',
                replacements: {
                    top: `${sizeRatio * 72.5}px`,
                    left: `${sizeRatio * 31.5}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(6):after',
                replacements: {
                    top: `${sizeRatio * 70}px`,
                    left: `${sizeRatio * 23}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(7):after',
                replacements: {
                    top: `${sizeRatio * 66}px`,
                    left: `${sizeRatio * 15.5}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(8):after',
                replacements: {
                    top: `${sizeRatio * 60}px`,
                    left: `${sizeRatio * 8.6}px`,
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
        return new LoaderRoller({ ...this });
    }
}

export default LoaderRoller;