import PropUtil from "./PropUtil";

class Direction {
     static Initial = "initial";
     static Inherit = "inherit";
     static LeftToRight = "ltr";
     static RightToLeft = "rtl";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Initial, this.Inherit, this.LeftToRight, this.RightToLeft],
               backup,
               backup2
          );
     }
}

export default Direction;
