import PropUtil from "./PropUtil";

class Visibility {
     static Visible = "visible";
     static Hidden = "hidden";
     static Collapse = "collapse";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Visible, this.Hidden, this.Collapse, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default Visibility;
