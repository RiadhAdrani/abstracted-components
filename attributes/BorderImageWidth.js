import Length from "./Length";
import PropUtil from "./PropUtil";

class BorderImageWidth {
  static Auto = "auto";
  static Initial = "initial";
  static Inherit = "inherit";

  static checkProperty(prop, backup, backup2) {
    if (Length.isValidInput(prop)) return prop;
    if (Length.isValidInput(backup)) return backup;
    if (Length.isValidInput(backup2)) return backup2;
    return PropUtil.isProperty(
      prop,
      [this.Auto, this.Initial, this.Inherit],
      backup,
      (backup2 = this.Auto)
    );
  }
}

export default BorderImageWidth;
