import ILoader from '../Interfaces/Loader';
import CleanCSS from 'clean-css';
import { parse, stringify } from 'css';
import StyleChange from '../Interfaces/StyleChange';
class Loader implements ILoader {
  name: string;
  id: string;
  size: string;
  color: string;
  html: string;
  cssRules: string;
  constructor({
    name,
    id,
    size,
    color,
    html,
    cssRules,
  }: Omit<ILoader, 'transform'>) {
    this.name = name;
    this.id = id;
    this.size = size;
    this.color = color;
    this.html = html;
    this.cssRules = new CleanCSS({ format: 'beautify' }).minify(
      cssRules
    ).styles;
  }

  replaceStyles(changes: StyleChange[], includeKeyframes: boolean = true): string {
    const styleSheet = parse(this.cssRules);
    styleSheet.stylesheet!.rules = styleSheet.stylesheet!.rules.filter((rule: any) => {
      return includeKeyframes || rule.type !== 'keyframes';
    });
    changes.forEach((change: any) => {
      const rules = styleSheet.stylesheet!.rules!.filter((rule: any, i) => {
        return (
          rule.type === 'rule' &&
          rule.selectors.find(
            (selector: string) => selector === change.selector
          )
        );
      });
      rules.forEach((rule: any) => {
        Object.keys(change.replacements).forEach((property) => {
          const declaration = rule.declarations.find(
            (dec: any) => dec.property === property
          );
          if (declaration) {
            declaration.value = change.replacements[property];
          }
        });
      });
    });
    return stringify(styleSheet);
  }

  replaceKeyframeStyles(changes: StyleChange[]): string {
    const styleSheet = parse(this.cssRules);
    styleSheet.stylesheet!.rules = styleSheet.stylesheet!.rules.filter((rule: any) => {
      return rule.type !== 'rule';
    });
    changes.forEach((change: any) => {
      const keyframes = styleSheet.stylesheet!.rules.filter((rule: any, i) => {
        return (
          rule.type === 'keyframes' &&
          rule.name === change.selector
        );
      });
      keyframes.forEach((rule: any) => {
        Object.keys(change.replacements).forEach((keyVal) => {
          rule.keyframes.forEach((keyframe: any) => {
            const keyframeVal = keyframe.values.some(
              (val: string) => val === keyVal
            )
            if (keyframeVal) {
              Object.keys(change.replacements[keyVal]).forEach((property) => {
                const declaration = keyframe.declarations.find(
                  (dec: any) => dec.property === property
                );
                if (declaration) {
                  declaration.value = change.replacements[keyVal][property];
                }
              });
            }
          });
        });
      });
    });
    return stringify(styleSheet);
  }

  transform(size: string, color: string): Loader {
    return this;
  }

  clone() {
    return new Loader({ ...this });
  }
}

export default Loader;
