import PropUtil from "./PropUtil";

class FlexGrow {
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isLengthProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }
}

export default FlexGrow;
