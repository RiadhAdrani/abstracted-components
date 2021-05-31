import PropUtil from "./PropUtil";

class CaptionSide {
     static Top = "top";
     static Bottom = "bottom";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.Top, this.Bottom, this.Initial, this.Inherit];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default CaptionSide;
