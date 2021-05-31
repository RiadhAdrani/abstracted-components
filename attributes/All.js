import PropUtil from "./PropUtil";

class All {
  static Initial = "initial";
  static Inherit = "inherit";
  static Unset = "inset";

  static valuesList = [this.Inherit, this.Initial, this.Unset];

  static checkProperty = (prop, backup = this.Initial) => {
    return PropUtil.isProperty(prop, this.valuesList, backup, this.Inherit);
  };
}

export default All;
