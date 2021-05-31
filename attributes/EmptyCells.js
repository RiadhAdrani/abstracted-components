import PropUtil from "./PropUtil";

class EmptyCells {
     static Show = "show";
     static Hide = "hide";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Show, this.Hide, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default EmptyCells;
