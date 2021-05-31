import PropUtil from "./PropUtil";

class BackgroundClip {
  static BorderBox = "border-box";
  static PaddingBox = "padding-box";
  static ContentBox = "content-box";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    this.BorderBox,
    this.PaddingBox,
    this.ContentBox,
    this.Initial,
    this.Inherit,
  ];

  static checkProperty(prop, backup,backup2) {
    return PropUtil.isProperty(prop, this.valuesList, backup,backup2);
  }
}

export default BackgroundClip;
