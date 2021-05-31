import PropUtil from "./PropUtil";

class TextJustify {
     static None = "none";
     static Auto = "auto";
     static InterWord = "inter-word";
     static InterCharacter = "inter-character";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.None,
          this.Auto,
          this.InterWord,
          this.InterWord,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default TextJustify;
