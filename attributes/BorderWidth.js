import Length from "./Length";

class BorderWidth {
  static Medium = "medium";
  static Thin = "thin";
  static Thick = "thick";
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [this.Medium, this.Thin, this.Thick, this.Initial, this.Inherit];

  static checkProperty(prop, backup = this.Initial, backup2 = this.Initial) {
    if (this.valuesList.includes(prop) || Length.isValidLength(prop)) return prop;
    if (this.valuesList.includes(backup) || Length.isValidLength(backup)) return backup;
    if (this.valuesList.includes(backup2) || Length.isValidLength(backup2)) return backup2;
    return this.Initial;
  }
}

export default BorderWidth;
