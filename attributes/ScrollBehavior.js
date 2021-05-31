import PropUtil from "./PropUtil";

class ScrollBehavior {
     static Auto = "auto";
     static Smooth = "smooth";
     static Initial = "initial";
     static Inherit = "inheirt";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               backup,
               [this.Auto, this.Smooth, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default ScrollBehavior;
