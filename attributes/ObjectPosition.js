import PropUtil from "./PropUtil";

class ObjectPosition {
     static Initial = "initial";
     static Inherit = "inherit";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isPositionProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     }
}

export default ObjectPosition;
