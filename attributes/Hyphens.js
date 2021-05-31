import PropUtil from "./PropUtil";

class Hyphens {
     static None = "none";
     static Manual = "manual";
     static Auto = "auto";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.None, this.Manual, this.Auto, this.Inherit, this.Inherit];

     static checProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default Hyphens;
