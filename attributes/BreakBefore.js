import PropUtil from "./PropUtil";

class BreakBefore {
  static Auto = "auto";
  static All = "all";
  static Always = "always";
  static Avoid = "avoid";
  static AvoidColumn = "avoid-column";
  static AvoidPage = "avoid-page";
  static AvoidRegion = "avoid-region";
  static Column = "column";
  static Left = "left";
  static Page = "page";
  static Recto = "recto";
  static Region = "region";
  static Right = "right";
  static Verso = "verso";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    this.Auto,
    this.All,
    this.Always,
    this.Avoid,
    this.AvoidColumn,
    this.AvoidPage,
    this.AvoidRegion,
    this.Column,
    this.Left,
    this.Page,
    this.Recto,
    this.Region,
    this.Right,
    this.Verso,
    this.Initial,
    this.Inherit,
  ];

  static checkProperty(prop, backup, backup2 = this.Initial) {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  }
}

export default BreakBefore;
