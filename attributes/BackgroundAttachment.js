import PropUtil from "./PropUtil";

class BackgroundAttachment {
  static Scroll = "scroll";
  static Fixed = "fixed";
  static Local = "local";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [this.Scroll, this.Fixed, this.Local, this.Initial, this.Inherit];

  static checkProperty(prop, backup ,backup2) {
    return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
  }
}

export default BackgroundAttachment;
