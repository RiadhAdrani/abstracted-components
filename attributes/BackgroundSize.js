import Length from "./Length";
import PropUtil from "./PropUtil";

class BackgroundSize {
     static Auto = "auto";
     static Cover = "cover";
     static Contain = "contain";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.Auto, this.Cover, this.Contain, this.Initial, this.Inherit];

     static checkProperty(prop, backup, backup2) {
          if (Length.isValidInput(prop)) return prop;
          if (Length.isValidInput(backup)) return backup;
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default BackgroundSize;
