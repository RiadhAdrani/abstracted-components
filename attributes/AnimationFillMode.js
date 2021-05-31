import Default from "./Default";
import PropUtil from "./PropUtil";

class AnimationFillMode extends Default {
     static Forwards = "forwards";
     static Backwards = "backwards";
     static Both = "both";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Forwards, this.Backwards, this.Both, ...this.defaultValuesList],
               backup,
               backup2
          );
     }
}

export default AnimationFillMode;
