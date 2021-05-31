import Default from "./Default";
import PropUtil from "./PropUtil";

class AnimationIterationCount extends Default {
     static Infinite = "infinite";

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isOrderProperty(
               prop,
               [this.Infinite, ...this.defaultValuesList],
               backup,
               backup2
          );
     }
}

export default AnimationIterationCount;
