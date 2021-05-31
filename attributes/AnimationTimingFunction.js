import Default from "./Default";
import PropUtil from "./PropUtil";

class AnimationTimingFunction extends Default {
     static Linear = "linear";
     static Ease = "ease";
     static EaseIn = "ease-in";
     static EaseOut = "ease-out";
     static EaseInOut = "ease-in-out";
     static StepStart = "step-start";
     static StepEnd = "step-end";

     static valuesList = [
          this.Linear,
          this.Ease,
          this.EaseIn,
          this.EaseOut,
          this.EaseInOut,
          this.StepEnd,
          this.StepStart,
     ];

     /**
      * Specifies a stepping function, with two parameters.
      * The first parameter specifies the number of intervals in the function.
      * It must be a positive integer (greater than 0).
      * The second parameter, which is optional, is either the value "start" or "end", and specifies the point at which the change of values occur within the interval.
      * If the second parameter is omitted, it is given the value "end"
      * @param {number} int a number, `greater than 0`.
      * @param {string} startOrEnd one of the two strings: `start`, or `end`
      */
     static newSteps(int, startOrEnd) {
          return `steps(${int},${startOrEnd ? startOrEnd : ""})`;
     }

     /**
      * Define your own values in the cubic-bezier function.
      * Possible values are numeric values from 0 to 1, else it will count
      * as an invalid input.
      * @param {number} n1 value from 0 to 1
      * @param {number} n2 value from 0 to 1
      * @param {number} n3 value from 0 to 1
      * @param {number} n4 value from 0 to 1
      */
     static newCubicBezier(n1, n2, n3, n4) {
          return `cubic-bezier(${n1},${n2},${n3},${n4})`;
     }

     static checkProperty(prop, backup, backup2) {
          const regSteps = /steps\((\d+),(start|end)\)/;
          const regBezier = /cubic-bezier\((1|(0.(\d+)))(,(1|(0.(\d+)))){3}\)/;

          if (regSteps.test(prop) || regBezier.test(prop)) return prop;
          if (regSteps.test(backup) || regBezier.test(backup)) return backup;
          if (regSteps.test(backup2) || regBezier.test(backup2)) return backup2;

          return PropUtil.isProperty(
               prop,
               [...this.valuesList, ...this.defaultValuesList],
               backup,
               backup2
          );
     }
}

export default AnimationTimingFunction;
