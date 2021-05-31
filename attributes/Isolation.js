import PropUtil from "./PropUtil";

class Isolation {
     static Auto = "auto";
     static Isolate = "isolate";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Auto, this.Isolate, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default Isolation;
