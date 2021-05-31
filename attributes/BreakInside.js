import PropUtil from "./PropUtil";

class BreakInside {
  static Auto = "auto";
  static Avoid = "avoid";
  static AvoidColumn = "avoid-column";
  static AvoidPage = "avoid-page";
  static AvoidRegion = "avoid-region";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [this.Auto, this.Avoid, this.AvoidColumn, this.AvoidPage, this.AvoidRegion];

  static checkProperty(prop, backup, backup2 = this.Initial) {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  }
}

export default BreakInside;
