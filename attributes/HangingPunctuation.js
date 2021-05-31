import PropUtil from "./PropUtil";

class HangingPunctuation {
     static None = "none";
     static First = "first";
     static Last = "last";
     static AllowEnd = "allow-end";
     static ForceEnd = "force-end";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.None,
          this.First,
          this.Last,
          this.AllowEnd,
          this.ForceEnd,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default HangingPunctuation;
