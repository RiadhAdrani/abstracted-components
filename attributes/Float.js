import PropUtil from "./PropUtil";

class Float {
     static None = "none";
     static Left = "left";
     static Right = "right";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.None, this.Left, this.Right, this.Initial, this.Inherit];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default Float;
