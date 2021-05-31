import PropUtil from "./PropUtil";

class BorderCollapse {
  static Separate = "separate";
  static Collapse = "collapse";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [this.Separate, this.Collapse, this.Inherit, this.Initial];

  static checkProperty(prop, backup, backup2 = this.Initial) {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  }
}

export default BorderCollapse;
