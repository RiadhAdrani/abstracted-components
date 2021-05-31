import PropUtil from "./PropUtil";

class Overflow {
     static Visible = "visible";
     static Hidden = "hidden";
     static Scroll = "scroll";
     static Auto = "auto";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Visible,
          this.Hidden,
          this.Scroll,
          this.Auto,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default Overflow;
