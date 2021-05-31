import PropUtil from "./PropUtil";

class BackfaceVisibility {
  static Visible = "visible";
  static Hidden = "hidden";
  static Initial = "initial";
  static Inherit = "inherit";

  static valueList = [this.Visible, this.Hidden, this.Initial, this.Inherit];

  static checkProperty(prop, backup ,backup2) {
    return PropUtil.isProperty(prop, this.valueList, backup, backup2);
  }
}

export default BackfaceVisibility;
