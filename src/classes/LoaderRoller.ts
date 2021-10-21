import Loader from './Loader';
import StyleChange from '../Interfaces/StyleChange';

class LoaderRoller extends Loader {
    transform(size: string, color: string) {
        const oldSizeInt = parseInt(this.size, 10);
        const newSizeInt = parseInt(size, 10);
        const sizeDifference = (newSizeInt / oldSizeInt);
        const pointSize = Math.floor(newSizeInt/11);

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
                    'transform-origin': `${newSizeInt/2}px ${newSizeInt/2}px`,
                },
            },
            {
                selector: '.lds-roller div:after',
                replacements: {
                    background: color,
                    width: `${pointSize}px`,
                    height: `${pointSize}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(1):after',
                replacements: {
                    top: `${sizeDifference * 63}px`,
                    left: `${sizeDifference * 63}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(2):after',
                replacements: {
                    top: `${sizeDifference * 68}px`,
                    left: `${sizeDifference * 56}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(3):after',
                replacements: {
                    top: `${sizeDifference * 71}px`,
                    left: `${sizeDifference * 48}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(4):after',
                replacements: {
                    top: `${sizeDifference * 72}px`,
                    left: `${sizeDifference * 40}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(5):after',
                replacements: {
                    top: `${sizeDifference * 71}px`,
                    left: `${sizeDifference * 32}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(6):after',
                replacements: {
                    top: `${sizeDifference * 68}px`,
                    left: `${sizeDifference * 24}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(7):after',
                replacements: {
                    top: `${sizeDifference * 63}px`,
                    left: `${sizeDifference * 17}px`,
                },
            },
            {
                selector: '.lds-roller div:nth-child(8):after',
                replacements: {
                    top: `${sizeDifference * 56}px`,
                    left: `${sizeDifference * 12}px`,
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