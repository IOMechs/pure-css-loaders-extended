export default interface ILoader {
  name: string;
  id: string;
  size: string;
  color: string;
  html: string;
  cssRules: string;
  transform: (size: string, color: string) => ILoader;
}
