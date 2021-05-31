import PropUtil from "./PropUtil";

class BoxDecorationBreak {
  static Slice = "slice";
  static Clone = "clone";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [this.Slice, this.Clone, this.Initial, this.Inherit];

  static checkProperty(prop, backup = this.Initial) {
    return PropUtil.isProperty(prop, this.valuesList, backup, this.Initial);
  }
}

export default BoxDecorationBreak;
