import PropUtil from "./PropUtil";

class Clear {
     static None = "none";
     static Left = "left";
     static Right = "right";
     static Both = "both";
     static Initial = "initial";
     static Inherit = "inherit";

     static valuesList = [this.None, this.Left, this.Right, this.Both, this.Initial, this.Inherit];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(prop, this.valuesList, backup, backup2);
     }
}

export default Clear;
