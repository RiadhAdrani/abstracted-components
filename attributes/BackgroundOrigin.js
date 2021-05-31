import PropUtil from "./PropUtil";

class BackgroundOrigin {
  static PaddingBox = "padding-box";
  static BorderBox = "border-box";
  static ContentBox = "content-box";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [
    this.PaddingBox,
    this.BorderBox,
    this.ContentBox,
    this.Inherit,
    this.Initial,
  ];

  static checkProperty(prop, backup, backup2) {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  }
}

export default BackgroundOrigin;
