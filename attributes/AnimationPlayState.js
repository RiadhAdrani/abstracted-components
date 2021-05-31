import Default from "./Default";
import PropUtil from "./PropUtil";

class AnimationPlayState extends Default {
     static Paused = "paused";
     static Running = "running";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [this.Paused, this.Running, ...this.defaultValuesList],
               backup,
               backup2
          );
     }
}

export default AnimationPlayState;
