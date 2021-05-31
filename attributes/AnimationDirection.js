import Default from "./Default";
import PropUtil from "./PropUtil";

class AnimationDirection extends Default {
     static Normal = "normal";
     static Reverse = "reverse";
     static Alternate = "alternate";
     static AlternateReverse = "alternate-reverse";

     static valuesList = [this.Normal, this.Reverse, this.Alternate, this.AlternateReverse];

     static checkProperty(prop, backup, backup2) {
          return PropUtil.isProperty(
               prop,
               [...this.defaultValuesList, ...this.valuesList],
               backup,
               backup2
          );
     }
}

export default AnimationDirection;
