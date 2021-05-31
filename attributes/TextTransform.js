import PropUtil from "./PropUtil";

class TextTransform {
     static None = "none";
     static Capitalize = "capitalize";
     static Uppercase = "uppercase";
     static Lowercase = "lowercase";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.None,
          this.Capitalize,
          this.Uppercase,
          this.Lowercase,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default TextTransform;
