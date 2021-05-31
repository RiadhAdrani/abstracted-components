import PropUtil from "./PropUtil";

class TabSize {
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isLengthProperty(prop, [this.Inherit, this.Initial], backup, backup2);
     }
}
export default TabSize;
