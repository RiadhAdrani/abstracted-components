import Length from "./Length";
import PropUtil from "./PropUtil";

class BorderSpacing {
  static Initial = "initial";
  static Inherit = "inherit";

  static checkProperty(prop, backup, backup2 = this.Initial) {
    if (Length.isValidInput(prop)) return prop;
    if (Length.isValidInput(backup)) return backup;
    if (Length.isValidInput(backup2)) return backup2;

    return PropUtil.isProperty(prop, [this.Initial, this.Inherit], backup, backup2);
  }
}

export default BorderSpacing;
