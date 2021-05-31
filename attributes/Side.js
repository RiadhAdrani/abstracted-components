import PropUtil from "./PropUtil";

class Side {
  static Auto = "auto";
  static Initial = "initial";
  static Inherit = "inherit";

  static checkProperty(prop, backup, backup2) {
    return PropUtil.isLengthProperty(prop, [this.Auto,this.Initial,this.Inherit],backup,backup2);
  }
}

export default Side;
