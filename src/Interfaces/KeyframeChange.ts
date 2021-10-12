interface KeyframeChange {
    selector: string;
    replacements: Record<string,Record<string, string>>;
  }
  
  export default KeyframeChange;
  