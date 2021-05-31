import PropUtil from "./PropUtil";

class Perspective {
     static None = "none";
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isLengthProperty(
               prop,
               [this.None, this.Initial, this.Inherit],
               backup,
               backup2
          );
     }
}

export default Perspective;
