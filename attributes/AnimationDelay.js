import Default from "./Default";
import PropUtil from "./PropUtil";

class AnimationDelay extends Default {
     static checkProperty = (prop, backup, backup2) => {
          return PropUtil.isTimeProperty(prop, [this.Initial, this.Inherit], backup, backup2);
     };
}

export default AnimationDelay;
