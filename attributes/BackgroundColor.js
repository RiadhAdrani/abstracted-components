import Colors from "./Colors";

class BackgroundColor {
  static Initial = "initial";
  static Inherit = "inherit";

  static valuesList = [this.Initial, this.Inherit];

  static isValidBackgroundColor = (color) => {
    if (Colors.isValidColor(color)) return true;
    if (this.valuesList.includes(color)) return true;
    return false;
  };

  static checkProperty(prop, backup, backup2) {

    return Colors.validateColor(prop,backup,backup2);
    
  }
}

export default BackgroundColor;
