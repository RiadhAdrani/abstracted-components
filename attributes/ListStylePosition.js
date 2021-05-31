import PropUtil from "./PropUtil";

class ListStylePosition {
     static Inside = "inside";
     static Outside = "outside";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Inside, this.Outside, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default ListStylePosition;
