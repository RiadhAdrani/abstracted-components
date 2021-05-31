import PropUtil from "./PropUtil";

class AlignItems {
  static Stretch = "stretch";
  static Center = "center";
  static FlexStart = "flex-start";
  static FlexEnd = "flex-end";
  static Baseline = "baseline";
  static Initial = "initial";
  static Inherit = "Inherit";

  static valuesList = [
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

export default AlignItems;
