import PropUtil from "./PropUtil";

class PageBreakAfter {
     static Auto = "auto";
     static Always = "always";
     static Avoid = "avoid";
     static Left = "left";
     static Right = "right";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Auto,
          this.Always,
          this.Avoid,
          this.Left,
          this.Right,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default PageBreakAfter;
