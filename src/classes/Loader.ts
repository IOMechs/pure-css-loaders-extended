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

  replaceStyles(changes: StyleChange[]): string {
    const styleSheet = parse(this.cssRules);
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

  transform(size: string, color: string): Loader {
    return this;
  }

  clone() {
    return new Loader({ ...this });
  }
}

export default Loader;
