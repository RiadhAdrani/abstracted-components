import PropUtil from "./PropUtil";

class BorderImageRepeat {
  static Stretch = "stretch";
  static Repeat = "repeat";
  static Round = "round";
  static Space = "space";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    this.Stretch,
    this.Repeat,
    this.Round,
    this.Space,
    this.Initial,
    this.Inherit,
  ];

  static checkProperty(prop, backup, backup2) {
    return PropUtil.isProperty(prop, this.valuesList, backup, (backup2 = this.Initial));
  }
}

export default BorderImageRepeat;
