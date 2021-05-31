import PropUtil from "./PropUtil";

class ObjectFit {
     static Fill = "fill";
     static Contain = "contain";
     static Cover = "cover";
     static None = "none";
     static ScaleDown = "scale-down";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [
          this.Fill,
          this.Contain,
          this.Cover,
          this.None,
          this.ScaleDown,
          this.Initial,
          this.Inherit,
     ];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default ObjectFit;
