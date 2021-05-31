import PropUtil from "./PropUtil";

class BackgroundRepeat {
  static Repeat = "repeat";
  static RepeatX = "repeat-x";
  static RepeatY = "repeat-y";
  static NoRepeat = "no-repeat";
  static Space = "space";
  static Round = "round";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    this.Repeat,
    this.RepeatX,
    this.RepeatY,
    this.NoRepeat,
    this.Space,
    this.Round,
    this.Initial,
    this.Inherit,
  ];

  static checkProperty(prop, backup,backup2) {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  }
}

export default BackgroundRepeat;
