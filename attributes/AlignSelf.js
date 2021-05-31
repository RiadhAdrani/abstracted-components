import PropUtil from "./PropUtil";

class AlignSelf {
  static Auto = "auto";
  static Stretch = "stretch";
  static Center = "center";
  static FlexStart = "flex-start";
  static FlexEnd = "flex-end";
  static Baseline = "baseline";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    this.Auto,
    this.Stretch,
    this.Center,
    this.FlexStart,
    this.FlexEnd,
    this.Baseline,
    this.Inherit,
    this.Initial,
  ];

  static checkProperty = (prop, backup, backup2) => {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  };
}

export default AlignSelf;
