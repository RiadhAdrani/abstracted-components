import PropUtil from "./PropUtil";

class VerticalAlign {
     static Baseline = "baseline";
     static Sub = "sub";
     static Super = "super";
     static Top = "top";
     static TextTop = "text-top";
     static Middle = "middle";
     static Bottom = "bottom";
     static TextBottom = "text-bottom";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Baseline,
          this.Sub,
          this.Super,
          this.Top,
          this.TextTop,
          this.Middle,
          this.Bottom,
          this.TextBottom,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default VerticalAlign;
