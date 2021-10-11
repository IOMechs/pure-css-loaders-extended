interface StyleChange {
  selector: string;
  replacements: Record<string, string> | Record<string,Record<string, string>>;
}

export default StyleChange;
