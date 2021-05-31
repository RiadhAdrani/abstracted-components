import PropUtil from "./PropUtil";

class BoxSizing {
  static ContentBox = "content-box";
  static BorderBox = "border-box";
  static Initial = "initial";
  static Inherit = "inherit";

  static checkProperty(prop, backup, backup2 = this.Initial) {
    return PropUtil.isProperty(
      prop,
      [this.ContentBox, this.BorderBox, this.Initial, this.Inherit],
      backup,
      backup2
    );
  }
}

export default BoxSizing;
