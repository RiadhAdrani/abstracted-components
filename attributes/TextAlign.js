import PropUtil from "./PropUtil";

class TextAlign {
     static Left = "left";
     static Right = "right";
     static Center = "center";
     static Justify = "justify";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Left,
          this.Right,
          this.Center,
          this.Justify,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default TextAlign;
